import { site, services, areas } from '../site.mjs';
import { head, header, footer, estForm, businessSchema, crumbs, crumbSchema } from '../layout.mjs';
import { img, esc } from '../lib.mjs';

const banner = ({ eyebrow, h1, lead, image, trail }) => `<section class="pbanner">
  <div class="pbanner__img" aria-hidden="true">${img(image, { sizes: '100vw', eager: true, alt: '' })}</div>
  <div class="pbanner__veil" aria-hidden="true"></div>
  <div class="wrap pbanner__in">${crumbs(trail)}<p class="eyebrow eyebrow--light up">${eyebrow}</p><h1 class="up">${h1}</h1><p class="up">${lead}</p></div>
  <svg class="hero__wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 50 C 200 10 420 90 720 50 S 1240 10 1440 45 V90 H0Z" fill="currentColor"/></svg>
</section>`;

export function renderAbout() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about-us/' }];
  const body = `<main id="content">
  ${banner({ eyebrow: 'About us', h1: 'A local crew that does the slow part right.', lead: 'We coat garages, homes, patios and commercial floors in Fort Mohave and the surrounding river communities.', image: 'lakeAerial', trail })}
  <section class="sec">
    <div class="wrap about">
      <div class="prose">
        <h2 class="up">How we approach a floor</h2>
        <p class="up">A coating is only as strong as the concrete it is stuck to. That simple idea shapes everything we do. Most failed floors in this valley did not fail because the product was bad; they failed because the slab was never opened up, the old sealer was never removed, or the coating went down on concrete hot enough to cook it before it could bond.</p>
        <p class="up">So we spend our time where it counts. Slabs are ground with diamond tooling and dust extraction. Cracks and chips are filled and ground flush. Moisture is measured. Products are chosen for the space, the season and the slab temperature on the day, and every layer is written into the quote so you know exactly what you are paying for.</p>
        <h2 class="up">What you can expect</h2>
        <ul class="checks up">
          <li>A visit to see the floor in person before any price is given</li>
          <li>A written quote that lists preparation, repairs and each coat</li>
          <li>Clear start times, cure times and return-to-use guidance</li>
          <li>Protected walls, doors and cabinets during the work</li>
          <li>A walkthrough at the end and simple care instructions</li>
        </ul>
        <h2 class="up">Who we work with</h2>
        <p class="up">Most of our projects are for homeowners: garages and toy barns, carports, patios, pool decks, casitas and interior rooms. We also work with business owners and property managers along Highway 95 — shops, salons, clinics, restaurants, hangars and storage buildings — and schedule around operating hours when a space cannot close.</p>
        <p class="up">If you are still deciding between systems, each of our service pages explains where that system works well, where it does not and what it takes to maintain. We would rather you choose the right floor than the most expensive one.</p>
      </div>
      <aside class="about__side up">
        <figure class="pop">${img('crewTrowel', { sizes: '(max-width: 900px) 92vw, 34vw' })}</figure>
        <div class="sidecard"><p class="sidecard__h">Our services</p><ul class="about__svc">${services.map((s) => `<li><a href="/${s.slug}/">${s.name}</a></li>`).join('')}</ul><button type="button" class="btn btn--river" data-open-est aria-haspopup="dialog">Free estimate</button></div>
      </aside>
    </div>
  </section>
</main>`;
  return head({ title: 'About Fort Mohave Epoxy | Preparation-First Floor Coatings', description: 'Fort Mohave Epoxy installs garage, interior, patio and commercial floor coatings with diamond-ground prep, moisture testing and written, itemized quotes.', path: '/about-us/', schema: [businessSchema(), crumbSchema(trail)] }) + header('about') + body + footer();
}

const areaCopy = {
  'Fort Mohave': 'Our home base. We coat garages, carports and patios throughout Fort Mohave, including golf-course neighborhoods around Desert Lakes and Los Lagos, homes on the mesas and properties along the Highway 95 corridor. Commercial work here ranges from small service shops to medical and retail buildings.',
  'Bullhead City': 'North along the river, Bullhead City has a wide mix of homes, from older slabs that need extra preparation to newer construction with builder-sealed garages. We also work with shops, restaurants and storage businesses throughout the city.',
  'Mohave Valley': 'East and south of Fort Mohave, Mohave Valley includes larger rural lots with detached shops, RV garages and equipment barns. Those buildings often carry heavier loads, so we pay close attention to slab condition and choose heavier systems where needed.',
  'Mesquite Creek': 'Just south of Fort Mohave, Mesquite Creek homes and outbuildings receive the same full preparation and system options as any project closer in.',
  'Golden Shores & Topock': 'Farther south toward the Interstate 40 crossing, these river communities include homes with boat storage, carports and outdoor living areas that benefit from UV-stable, textured coatings.',
};

export function renderAreas() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'Service Areas', url: '/service-areas/' }];
  const body = `<main id="content">
  ${banner({ eyebrow: 'Service areas', h1: 'Fort Mohave and the river communities around it.', lead: 'Staying close to home keeps estimates quick and schedules flexible.', image: 'riverBand', trail })}
  <section class="sec">
    <div class="wrap">
      <div class="arealist">${areas.map((a) => `<article class="arealist__i up"><h2>${a.name}</h2><p>${esc(areaCopy[a.name])}</p></article>`).join('')}</div>
      <div class="prose narrow up" style="margin-top:56px">
        <h2>Not sure if you’re in range?</h2>
        <p>Send us your location with your request. For larger residential and commercial projects we travel throughout the surrounding area. Every service — including <a href="/garage-floor-coatings/">garage floor coatings</a>, <a href="/patio-concrete-coatings/">patio coatings</a> and <a href="/warehouse-floor-coatings/">warehouse floors</a> — is available across our service area.</p>
      </div>
    </div>
  </section>
</main>`;
  return head({ title: 'Service Areas | Fort Mohave, Bullhead City & Mohave Valley Epoxy', description: 'Floor coatings in Fort Mohave, Bullhead City, Mohave Valley, Mesquite Creek, Golden Shores and Topock, Arizona. Garages, patios, interiors and commercial floors.', path: '/service-areas/', schema: [businessSchema(), crumbSchema(trail)] }) + header('areas') + body + footer();
}

export function renderContact() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact-us/' }];
  const body = `<main id="content">
  ${banner({ eyebrow: 'Contact', h1: 'Request a free estimate.', lead: 'Share a few details and expect a call back within a business day to pick a time.', image: 'jetski', trail })}
  <section class="sec">
    <div class="wrap contact">
      <div class="up contact__form">${estForm({ id: 'contact-f', layout: 'pair', notes: true, title: 'Project details', intro: 'Name, phone, email and project type are required.', cta: 'Send request' })}</div>
      <div class="contact__side">
        <div class="infobox up"><p class="foot__h">Phone</p><p class="infobox__big"><a href="tel:${site.phone.tel}">${site.phone.display}</a></p><p>${site.hours}</p></div>
        <div class="infobox up"><p class="foot__h">What happens next</p><ol><li>We call to confirm details and set a time.</li><li>On site we measure, test moisture and show samples.</li><li>You get a written, itemized quote.</li><li>We schedule the work around you.</li></ol></div>
        <div class="infobox up"><p class="foot__h">Coverage</p><p>Fort Mohave, Bullhead City, Mohave Valley, Mesquite Creek, Golden Shores and Topock. <a href="/service-areas/">Details</a></p></div>
      </div>
    </div>
  </section>
</main>`;
  return head({ title: 'Contact | Free Epoxy Floor Estimate in Fort Mohave, AZ', description: 'Request a free on-site estimate for garage, interior, patio or commercial floor coatings in Fort Mohave, AZ. We reply within one business day.', path: '/contact-us/', schema: [businessSchema(), crumbSchema(trail)] }) + header('contact') + body + footer();
}

export function renderPrivacy() {
  const trail = [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy-policy/' }];
  const body = `<main id="content"><section class="sec"><div class="wrap prose narrow">
  ${crumbs(trail)}
  <h1>Privacy Policy</h1>
  <p>${esc(site.name)} gathers just enough information through this website to answer the estimate requests people send.</p>
  <h2>Information we collect</h2>
  <p>Estimate forms on this site request a name, phone, email, the kind of project and any notes you choose to add. We also record which page the form was sent from.</p>
  <h2>How we use it</h2>
  <p>We use this information to contact you, schedule visits and prepare quotes. We do not sell it or share it with others for marketing.</p>
  <h2>Third-party services</h2>
  <p>The map and fonts on this site are provided by Google, which may collect usage data under its own policies. Form submissions are processed through our website hosting provider.</p>
  <h2>Your choices</h2>
  <p>To review or remove information you have sent us, call ${site.phone.display} or use the <a href="/contact-us/">contact page</a>.</p>
  </div></section></main>`;
  return head({ title: 'Privacy Policy | Fort Mohave Epoxy', description: 'How Fort Mohave Epoxy handles information submitted through its website.', path: '/privacy-policy/' }) + header('') + body + footer();
}

export function render404() {
  const body = `<main id="content"><section class="sec"><div class="wrap prose narrow">
  <p class="eyebrow">404</p><h1>This page drifted downstream.</h1><p>It may have moved or never existed. These links will get you back on course:</p>
  <p class="btnrow"><a class="btn btn--river" href="/">Home</a> <a class="btn btn--line" href="/#systems">Services</a> <a class="btn btn--line" href="/contact-us/">Contact</a></p>
  </div></section></main>`;
  return head({ title: 'Page Not Found | Fort Mohave Epoxy', description: 'The page you requested could not be found.', path: '/404.html' }).replace('index,follow', 'noindex') + header('') + body + footer();
}
