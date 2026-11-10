import { site, services, projectTypes, areas } from './site.mjs';
import { esc } from './lib.mjs';

// Lead form used everywhere. layout: 'stack' (single column), 'pair' (two columns), 'strip' (one row on desktop)
export function estForm({ id, layout = 'pair', title = '', intro = '', notes = false, cta = 'Get my free estimate' }) {
  const f = (name, label, input) => `<div class="ef__f"><label for="${id}-${name}">${label}</label>${input}<span class="ef__err" id="${id}-${name}-e" aria-live="polite"></span></div>`;
  return `<form class="ef ef--${layout}" id="${id}" action="/api/lead" method="post" novalidate data-lead>
  ${title ? `<h2 class="ef__title">${title}</h2>` : ''}${intro ? `<p class="ef__intro">${intro}</p>` : ''}
  <div class="ef__grid">
    ${f('name', 'Name', `<input id="${id}-name" name="name" type="text" autocomplete="name" placeholder="Your name" required maxlength="80" aria-describedby="${id}-name-e">`)}
    ${f('phone', 'Phone', `<input id="${id}-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="(928) 555-0100" required aria-describedby="${id}-phone-e">`)}
    ${f('email', 'Email', `<input id="${id}-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required maxlength="120" aria-describedby="${id}-email-e">`)}
    ${f('project', 'Project type', `<select id="${id}-project" name="project" required aria-describedby="${id}-project-e"><option value="">Choose one</option>${projectTypes.map((t) => `<option>${esc(t)}</option>`).join('')}</select>`)}
    ${notes ? `<div class="ef__f ef__f--wide"><label for="${id}-message">Anything we should know? <em>optional</em></label><textarea id="${id}-message" name="message" rows="4" maxlength="1500" placeholder="Size of the space, current floor, timing…"></textarea></div>` : ''}
    <div class="ef__trap" aria-hidden="true"><input name="company_website" tabindex="-1" autocomplete="off" aria-label="Leave empty"></div>
    <div class="ef__go"><button class="btn btn--river" type="submit">${cta}</button></div>
  </div>
  <p class="ef__note" role="status" aria-live="polite"></p>
</form>`;
}

export function head({ title, description, path, schema = [], image = site.ogImage }) {
  const url = site.domain + path;
  return `<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index,follow">
<meta name="theme-color" content="#f7f1e7">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site.domain}${image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${site.domain}${image}">
<meta name="geo.region" content="US-AZ">
<meta name="geo.placename" content="Fort Mohave">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Young+Serif&family=Karla:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap">
<link rel="stylesheet" href="/assets/css/fm.css?v=1">
${schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>`;
}

const logo = `<a class="brand" href="/" aria-label="${esc(site.name)} — home"><span class="brand__slot" aria-hidden="true">LOGO</span><span class="brand__name">Fort Mohave<b>Epoxy</b></span></a>`;

export function header(active = '') {
  const a = (k) => (active === k ? ' aria-current="page"' : '');
  return `<body>
<a class="skip" href="#content">Skip to content</a>
<div class="tide">
  <div class="wrap tide__row">
    <p>Floor coatings for Fort Mohave, Bullhead City &amp; Mohave Valley</p>
    <p class="tide__hrs">${site.hours}</p>
  </div>
</div>
<header class="bar" data-bar>
  <div class="wrap bar__row">
    ${logo}
    <nav class="nav" aria-label="Main">
      <ul class="nav__list">
        <li><a href="/"${a('home')}>Home</a></li>
        <li class="nav__drop">
          <button type="button" class="nav__btn" aria-expanded="false" aria-controls="nav-services" data-drop>Services <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
          <div class="nav__menu" id="nav-services">
            <ul>${services.map((s) => `<li><a href="/${s.slug}/"${a(s.slug)}>${s.name}</a></li>`).join('')}</ul>
            <a class="nav__all" href="/#systems">Compare all systems →</a>
          </div>
        </li>
        <li><a href="/about-us/"${a('about')}>About Us</a></li>
        <li><a href="/service-areas/"${a('areas')}>Service Areas</a></li>
        <li><a href="/contact-us/"${a('contact')}>Contact</a></li>
      </ul>
    </nav>
    <a class="bar__tel" href="tel:${site.phone.tel}"><svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>${site.phone.display}</a>
    <button type="button" class="btn btn--river bar__cta" data-open-est aria-haspopup="dialog">Free estimate</button>
    <button type="button" class="burger" aria-expanded="false" aria-controls="drawer" aria-label="Open menu" data-burger><span></span><span></span><span></span></button>
  </div>
  <div class="drawer" id="drawer" hidden data-drawer>
    <nav aria-label="Mobile">
      <ul>
        <li><a href="/">Home</a></li>
        <li><p class="drawer__h">Services</p><ul class="drawer__svc">${services.map((s) => `<li><a href="/${s.slug}/">${s.name}</a></li>`).join('')}</ul></li>
        <li><a href="/about-us/">About Us</a></li>
        <li><a href="/service-areas/">Service Areas</a></li>
        <li><a href="/contact-us/">Contact</a></li>
      </ul>
    </nav>
    <div class="drawer__form">${estForm({ id: 'drawer-f', layout: 'stack', title: 'Free estimate', intro: 'Tell us about the floor and we’ll call to set up a visit.' })}</div>
    <a class="drawer__tel" href="tel:${site.phone.tel}">Call ${site.phone.display}</a>
  </div>
</header>
<dialog class="est" id="est" aria-labelledby="est-title" data-est>
  <div class="est__in">
    <button type="button" class="est__x" aria-label="Close" data-close-est>×</button>
    <div class="est__side">
      <p class="eyebrow">Free on-site estimate</p>
      <h2 id="est-title">Tell us about your floor.</h2>
      <p>We’ll call within one business day to set a time to look at the slab, measure, and bring color samples.</p>
      <ul class="est__ticks"><li>No-pressure visit</li><li>Written, itemized quote</li><li>Moisture &amp; crack check included</li></ul>
    </div>
    ${estForm({ id: 'est-f', layout: 'pair', cta: 'Send my request' })}
  </div>
</dialog>`;
}

export function footer() {
  const map = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=12&output=embed`;
  return `<footer class="foot">
  <svg class="foot__wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30 C 240 0 480 60 720 30 S 1200 0 1440 30 V60 H0Z" fill="currentColor"/></svg>
  <div class="foot__body">
    <div class="wrap foot__grid">
      <div class="foot__brand">
        ${logo}
        <p>Garage, interior, patio and commercial floor coatings for Fort Mohave and the communities along the river.</p>
        <a class="foot__tel" href="tel:${site.phone.tel}">${site.phone.display}</a>
        <p class="foot__sm">${site.hours}</p>
      </div>
      <nav aria-label="Footer services"><p class="foot__h">Services</p><ul>${services.map((s) => `<li><a href="/${s.slug}/">${s.name}</a></li>`).join('')}</ul></nav>
      <div>
        <nav aria-label="Footer company"><p class="foot__h">Company</p><ul><li><a href="/about-us/">About Us</a></li><li><a href="/service-areas/">Service Areas</a></li><li><a href="/contact-us/">Contact</a></li><li><a href="/privacy-policy/">Privacy Policy</a></li></ul></nav>
        <p class="foot__h foot__h--gap">Serving</p><p class="foot__sm">${areas.map((x) => x.name).join(' · ')}</p>
      </div>
      <div class="foot__map"><p class="foot__h">Fort Mohave, Arizona</p><div class="foot__frame"><iframe title="Map of Fort Mohave, Arizona" src="${map}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div></div>
    </div>
    <div class="wrap foot__base"><p>© ${new Date().getFullYear()} ${esc(site.name)}. All rights reserved.</p><p><a href="/sitemap.xml">Sitemap</a> · <a href="/privacy-policy/">Privacy</a></p></div>
  </div>
</footer>
<script src="/assets/js/fm.js?v=1" defer></script>
</body>
</html>`;
}

export const bizId = `${site.domain}/#business`;
export const businessSchema = () => {
  const s = {
    '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness', '@id': bizId,
    name: site.name, url: `${site.domain}/`, image: site.domain + site.ogImage,
    description: 'Epoxy, polyaspartic and polyurea floor coatings for garages, homes, patios, shops and warehouses in Fort Mohave, Arizona and nearby river communities.',
    address: { '@type': 'PostalAddress', addressLocality: 'Fort Mohave', addressRegion: 'AZ', addressCountry: 'US' },
    areaServed: ['Fort Mohave, AZ', 'Bullhead City, AZ', 'Mohave Valley, AZ', 'Golden Shores, AZ'].map((n) => ({ '@type': 'Place', name: n })),
    knowsAbout: services.map((x) => x.name),
  };
  if (!site.phone.placeholder) s.telephone = site.phone.tel;
  return s;
};
export const serviceSchema = (svc, description) => ({ '@context': 'https://schema.org', '@type': 'Service', name: svc.name, serviceType: svc.name, description, url: `${site.domain}/${svc.slug}/`, provider: { '@id': bizId }, areaServed: [{ '@type': 'Place', name: 'Fort Mohave, AZ' }, { '@type': 'Place', name: 'Bullhead City, AZ' }, { '@type': 'Place', name: 'Mohave Valley, AZ' }] });
export const faqSchema = (faqs) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '') } })) });
export const crumbSchema = (items) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: site.domain + it.url })) });
export const websiteSchema = () => ({ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: `${site.domain}/` });
export const crumbs = (items) => `<nav class="trail" aria-label="Breadcrumb"><ol>${items.map((it, i) => (i < items.length - 1 ? `<li><a href="${it.url}">${esc(it.name)}</a></li>` : `<li aria-current="page">${esc(it.name)}</li>`)).join('')}</ol></nav>`;
