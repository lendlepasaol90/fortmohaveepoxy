import { site, services } from '../site.mjs';
import { head, header, footer, estForm, businessSchema, serviceSchema, faqSchema, crumbSchema, crumbs } from '../layout.mjs';
import { img, md, paras, esc } from '../lib.mjs';

// Content shape: { slug, title, description, eyebrow, h1, lead, heroImg, glance:[[k,v]],
//   sections:[{ id, h2, paras?, list?, kind?:'cards'|'steps'|'compare'|'note', items?, cols?, img?, caption? }],
//   faqs:[{q,a}], related:[slug], close:{h2,p} }

const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function block(s) {
  const id = s.id || slugify(s.h2);
  let extra = '';
  if (s.kind === 'cards') extra = `<div class="tiles">${s.items.map((it) => `<div class="tiles__i up"><h3>${esc(it.h)}</h3><p>${md(it.p)}</p></div>`).join('')}</div>`;
  if (s.kind === 'steps') extra = `<ol class="steps">${s.items.map((it, n) => `<li class="up"><span class="steps__n">${n + 1}</span><div><h3>${esc(it.h)}</h3><p>${md(it.p)}</p></div></li>`).join('')}</ol>`;
  if (s.kind === 'compare') extra = `<div class="vs up">${s.cols.map((c) => `<div class="vs__c"><h3>${esc(c.h)}</h3><ul>${c.items.map((x) => `<li>${md(x)}</li>`).join('')}</ul></div>`).join('')}</div>`;
  const text = s.paras ? (s.kind === 'note' ? `<div class="aside up">${paras(s.paras)}</div>` : `<div class="prose up">${paras(s.paras)}</div>`) : '';
  return `<section class="part" id="${id}">
      <h2 class="up">${esc(s.h2)}</h2>
      ${text}
      ${s.list ? `<ul class="checks up">${s.list.map((l) => `<li>${md(l)}</li>`).join('')}</ul>` : ''}
      ${extra}
      ${s.img ? `<figure class="part__fig pop">${img(s.img, { sizes: '(max-width: 900px) 92vw, 760px' })}${s.caption ? `<figcaption>${esc(s.caption)}</figcaption>` : ''}</figure>` : ''}
    </section>`;
}

export function renderService(c) {
  const svc = services.find((s) => s.slug === c.slug);
  const path = `/${c.slug}/`;
  const trail = [{ name: 'Home', url: '/' }, { name: svc.name, url: path }];
  const related = c.related.map((r) => services.find((s) => s.slug === r));
  const toc = c.sections.map((s) => ({ id: s.id || slugify(s.h2), h: s.toc || s.h2 }));
  const body = `
<main id="content">
  <section class="shero">
    <div class="wrap shero__grid">
      <div class="shero__txt">
        ${crumbs(trail)}
        <p class="eyebrow up">${esc(c.eyebrow)}</p>
        <h1 class="up">${esc(c.h1)}</h1>
        <p class="shero__lead up">${md(c.lead)}</p>
        <div class="shero__btns up"><button type="button" class="btn btn--river" data-open-est aria-haspopup="dialog">Free estimate</button><a class="btn btn--line" href="tel:${site.phone.tel}">${site.phone.display}</a></div>
      </div>
      <figure class="shero__pic pop">${img(c.heroImg, { sizes: '(max-width: 900px) 92vw, 46vw', eager: true })}</figure>
    </div>
    <div class="wrap"><dl class="glance up">${c.glance.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>
    <svg class="shero__wave" viewBox="0 0 1440 50" preserveAspectRatio="none" aria-hidden="true"><path d="M0 25 C 360 0 720 50 1080 22 S 1440 30 1440 30 V50 H0Z" fill="currentColor"/></svg>
  </section>

  <div class="wrap svc">
    <aside class="svc__side">
      <nav class="toc" aria-label="On this page"><p class="toc__h">On this page</p><ol>${toc.map((t) => `<li><a href="#${t.id}">${esc(t.h)}</a></li>`).join('')}<li><a href="#questions">Questions</a></li></ol></nav>
      <div class="sidecard"><p class="sidecard__h">Free on-site estimate</p><p>We measure, test the slab and bring samples. Written quote included.</p><button type="button" class="btn btn--river" data-open-est aria-haspopup="dialog">Request a visit</button><a href="tel:${site.phone.tel}">${site.phone.display}</a></div>
    </aside>
    <article class="svc__main">
      ${c.sections.map(block).join('\n')}
      <section class="part" id="questions">
        <h2 class="up">${esc(c.faqTitle || `${svc.name}: common questions`)}</h2>
        <div class="acc acc--single">${c.faqs.map((f) => `<details class="acc__i up"><summary>${esc(f.q)}</summary><div class="acc__a"><p>${md(f.a)}</p></div></details>`).join('')}</div>
      </section>
    </article>
  </div>

  <section class="sec sec--sand more">
    <div class="wrap">
      <div class="head up"><p class="eyebrow">Related services</p><h2>Other systems worth a look.</h2></div>
      <div class="more__grid">${related.map((r) => `<a class="mc up" href="/${r.slug}/"><figure>${img(r.img, { sizes: '(max-width: 700px) 92vw, 30vw', alt: '' })}</figure><span class="mc__t">${r.name}</span><span class="mc__p">${esc(r.blurb)}</span></a>`).join('')}</div>
    </div>
  </section>

  <section class="sec sec--aqua last" id="estimate">
    <div class="wrap last__grid">
      <div class="last__copy"><p class="eyebrow up">Free estimate</p><h2 class="up">${esc(c.close.h2)}</h2><p class="up">${md(c.close.p)}</p><p class="last__tel up">Or call <a href="tel:${site.phone.tel}">${site.phone.display}</a></p></div>
      <div class="up">${estForm({ id: 'svc-f', layout: 'pair', notes: true, title: 'Tell us about the project' })}</div>
    </div>
  </section>
</main>`;
  const heroSrc = (img(c.heroImg).match(/src="([^"]+)"/) || [])[1];
  return head({ title: c.title, description: c.description, path, image: heroSrc, schema: [businessSchema(), serviceSchema(svc, c.description), faqSchema(c.faqs), crumbSchema(trail)] }) + header(c.slug) + body + footer();
}
