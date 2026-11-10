import { site, services, areas } from '../site.mjs';
import { head, header, footer, estForm, businessSchema, faqSchema, websiteSchema } from '../layout.mjs';
import { img, bg, esc, md } from '../lib.mjs';

const faqs = [
  { q: 'How hot is too hot to coat a garage floor here?', a: 'Slab temperature matters more than air temperature. In June through September we start at first light, check the concrete with an infrared thermometer and switch to slower-reacting products or smaller mixes as the slab warms. If a slab facing west is already too hot by mid-morning, we finish that side another day rather than rush it.' },
  { q: 'Will the coating peel where my tires sit?', a: 'Hot-tire lifting is almost always a preparation problem. Thin coatings rolled onto smooth or sealed concrete soften under a hot tire and release. We diamond-grind every slab so the base coat soaks into open concrete, and we build the system thick enough to handle tires coming off a long drive on Highway 95 in July.' },
  { q: 'Can you coat a garage that holds a boat or travel trailer?', a: 'Yes. Boat and toy garages are common in this area. Trailer jacks and stabilizer pads concentrate a lot of weight on a small point, so we suggest a heavier build and a set of jack pads or plates. Wet hulls and lake water are no problem for a properly sealed floor.' },
  { q: 'How long until we can use the floor again?', a: 'With a polyaspartic topcoat, most garages are ready for foot traffic the same evening and vehicles in a few days, depending on temperature. Full-epoxy and metallic interior systems need longer between coats, usually two to four days in total.' },
  { q: 'Do you coat carports and slabs that are not enclosed?', a: 'We do. Open slabs see full sun, blowing dust and occasional monsoon rain, so we use UV-stable materials, lighter colors where possible and a grip texture. Carport floors under a roof but open on the sides do very well with a flake and polyaspartic system.' },
  { q: 'Is the floor slippery when it gets wet?', a: 'Any smooth, glossy surface can be slick when wet. Chip floors already have some tooth, and a fine grit mixed into the last coat adds more where you need it. For patios and pool decks we always build in grip.' },
  { q: 'What does an estimate include?', a: 'We look at the slab, measure, check moisture and existing cracks, talk through how the space is used and show color samples. You get a written quote that lists preparation, repairs, each coat in the system and the expected timeline.' },
  { q: 'Do I need HOA approval?', a: 'Inside a garage or home, usually not. For visible exterior work such as front walkways or driveways, some communities want to approve colors. We are happy to provide product sheets and samples for your submission.' },
];

const finishes = [
  { k: 'flake', name: 'Flake', img: 'terrazzo', t: 'The everyday workhorse. A full broadcast of vinyl chips hides dust, sand and tire marks and gives the floor a slight texture underfoot. Sand, river-stone and slate blends suit most homes here.', link: '/decorative-flake-flooring/' },
  { k: 'solid', name: 'Solid color', img: 'roomTrim', t: 'One clean color with a gloss or satin top. Solid floors look crisp in shops and modern interiors and are the easiest to stripe, mark or zone.', link: '/residential-epoxy-flooring/' },
  { k: 'metallic', name: 'Metallic', img: 'metalRiver', t: 'Pearl pigments moved by hand create depth that looks like water over stone. Every floor is different, which is the point. Best indoors, away from grit.', link: '/metallic-epoxy-flooring/' },
  { k: 'fast', name: 'Fast-cure', img: 'motoLift', t: 'Polyaspartic and polyurea systems cure quickly, stay flexible and resist the yellowing that sunlight causes in standard epoxy. Ideal for garages that need to be back in use fast.', link: '/polyaspartic-floor-coatings/' },
];

const gallery = ['garageYellow', 'shinyRoom', 'hangar', 'motoGarage', 'loungers', 'living', 'shopBays', 'homeGym', 'salon', 'warehouseOpen'];

export function renderHome() {
  const body = `
<main id="content">
  <section class="hero">
    <div class="hero__media" aria-hidden="true">${img('hero', { sizes: '100vw', eager: true, alt: '' })}</div>
    <div class="hero__shade" aria-hidden="true"></div>
    <div class="wrap hero__in">
      <p class="eyebrow eyebrow--light up">Epoxy flooring · Fort Mohave, Arizona</p>
      <h1 class="up">Floors that keep their cool in river country.</h1>
      <p class="hero__lead up">Garage, interior, patio and commercial coatings installed on properly prepared concrete — built for triple-digit summers, blowing sand and everything you drag home from the water.</p>
      <div class="hero__btns up"><button type="button" class="btn btn--sand" data-open-est aria-haspopup="dialog">Book a free estimate</button><a class="btn btn--ghost" href="#systems">Explore systems</a></div>
    </div>
    <svg class="hero__wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 50 C 200 10 420 90 720 50 S 1240 10 1440 45 V90 H0Z" fill="currentColor"/></svg>
  </section>

  <section class="quick" aria-labelledby="quick-h">
    <div class="wrap">
      <div class="quick__card up">
        <div class="quick__head"><h2 id="quick-h">Quick estimate request</h2><p>Four fields. We’ll call you back within one business day.</p></div>
        ${estForm({ id: 'quick-f', layout: 'strip', cta: 'Request estimate' })}
      </div>
    </div>
  </section>

  <section class="sec intro">
    <div class="wrap intro__grid">
      <div>
        <p class="eyebrow up">Concrete coatings in Fort Mohave</p>
        <h2 class="up">Life here is lived on concrete. It might as well be good concrete.</h2>
      </div>
      <div class="intro__copy">
        <p class="up">Fort Mohave sits low in the Mohave Valley, close to the Colorado River and a long way from mild weather. Summer afternoons push well past 110 degrees, the wind carries fine sand into every corner, and a typical garage here does far more than hold a car. It stores the boat, charges the side-by-side, keeps the fishing gear and coolers, and often doubles as a workshop or gym.</p>
        <p class="up">Bare concrete does not handle any of that gracefully. It soaks up oil and sunscreen, sheds dust that ends up on everything, and stains the first time a trailer drips lake water across it. We install coating systems that seal the slab, clean up with a hose or a mop, and stay bonded through the temperature swings this valley is known for.</p>
        <p class="up">The work is the same whether the floor belongs to a home near the golf courses, a shop off Highway 95 or a storage building in Mohave Valley: grind the slab properly, repair what needs repairing, check for moisture, and choose a system that suits how the space is really used. From there, the finish is your call — from practical flake to a metallic floor that looks like moving water. Start with our <a href="/garage-floor-coatings/">garage floor coatings</a> or compare every system below.</p>
      </div>
    </div>
    <div class="wrap">
      <ul class="tally">
        <li class="up"><b data-num="9">9</b><span>coating systems for homes, shops and industry</span></li>
        <li class="up"><b data-num="100" data-suffix="%">100%</b><span>mechanical diamond-grind preparation</span></li>
        <li class="up"><b>1–2</b><span>days for most fast-cure garage floors</span></li>
        <li class="up"><b>0</b><span>acid etching — it does not open dense slabs</span></li>
      </ul>
    </div>
  </section>

  <section class="sec sec--sand systems" id="systems" aria-labelledby="systems-h">
    <div class="wrap">
      <div class="head up"><p class="eyebrow">Our services</p><h2 id="systems-h">Nine systems. Pick the one that fits the space.</h2><p>Each service has its own page with installation details, maintenance tips and answers to common questions. Use the tabs to compare them side by side.</p></div>
      <div class="tabs up" data-tabs>
        <div class="tabs__list" role="tablist" aria-label="Coating systems">
          ${services.map((s, i) => `<button type="button" role="tab" id="tab-${s.slug}" aria-controls="panel-${s.slug}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}"><span>${String(i + 1).padStart(2, '0')}</span>${s.name}</button>`).join('')}
        </div>
        <div class="tabs__panels">
          ${services.map((s, i) => `<div class="tabs__panel" role="tabpanel" id="panel-${s.slug}" aria-labelledby="tab-${s.slug}"${i === 0 ? '' : ' data-hide'}>
            <figure>${img(s.img, { sizes: '(max-width: 900px) 92vw, 46vw', alt: '' })}</figure>
            <div class="tabs__txt"><h3>${s.name}</h3><p>${esc(s.blurb)}</p><ul>${s.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul><a class="btn btn--river" href="/${s.slug}/">View ${s.short.toLowerCase()} details</a></div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section class="sec heat" aria-labelledby="heat-h">
    <div class="heat__img" aria-hidden="true" style="background-image:url(${bg('desertDusk', 1600)})"></div>
    <div class="wrap heat__grid">
      <div class="heat__lead">
        <p class="eyebrow eyebrow--light up">Why choose us</p>
        <h2 id="heat-h" class="up">Built for one of the hottest corners of Arizona.</h2>
        <p class="up">Coatings that perform fine in milder places can struggle here. Materials cure faster on a hot slab, standard epoxy yellows when the garage door spends the afternoon open, and dust settles on wet coats if the work is not managed. We plan every job around those conditions instead of hoping for the best.</p>
        <p class="up">That means earlier start times through the summer, products chosen for their working time at the slab temperature on the day, and topcoats that hold their color in direct sun. It also means honesty: if a floor would be better served by waiting for a cooler morning, we will tell you.</p>
      </div>
      <div class="heat__cards">
        <article class="hc up"><span class="hc__n">01</span><h3>Prep you can see</h3><p>Every slab is diamond-ground with dust extraction. Cracks are opened and filled, spalls are rebuilt, and old paint or sealer is removed so nothing weak sits under the new floor.</p></article>
        <article class="hc up"><span class="hc__n">02</span><h3>Heat-aware scheduling</h3><p>We check slab temperature before mixing and adjust batch sizes, product speeds and start times. Hot afternoons are for planning, not for spreading coatings on sunbaked concrete.</p></article>
        <article class="hc up"><span class="hc__n">03</span><h3>UV-stable tops</h3><p>Aliphatic polyaspartic and urethane topcoats resist the amber shift that sunlight causes in ordinary epoxy, so a light gray floor stays light gray.</p></article>
        <article class="hc up"><span class="hc__n">04</span><h3>Straight answers</h3><p>Written quotes list every step and every coat. If a cheaper approach will do the job, we say so. If a floor has moisture or structural problems a coating will not fix, we tell you that too.</p></article>
      </div>
    </div>
  </section>

  <section class="sec toys" aria-labelledby="toys-h">
    <div class="wrap toys__grid">
      <div class="toys__pics">
        <figure class="toys__a pop">${img('boatPort', { sizes: '(max-width: 900px) 92vw, 30vw' })}</figure>
        <figure class="toys__b pop">${img('garageYellow', { sizes: '(max-width: 900px) 60vw, 22vw' })}</figure>
        <figure class="toys__c pop">${img('motoGarage', { sizes: '(max-width: 900px) 60vw, 20vw' })}</figure>
      </div>
      <div class="toys__copy">
        <p class="eyebrow up">Garage floors</p>
        <h2 id="toys-h" class="up">Garages, carports and toy barns.</h2>
        <p class="up">Around here a garage is rarely just a place to park. Many hold a boat on its trailer, a pair of personal watercraft, a side-by-side or a travel trailer between trips. Others are workshops with a welder in the corner, or air-conditioned man caves with a television and a fridge. Each of those uses puts different demands on a floor.</p>
        <p class="up">Trailer jacks and stabilizer pads press hard on a tiny area. Lake water, sunscreen and fuel drips find their way to the slab. Sand comes in on every tire and every pair of sandals. We build garage systems with enough thickness to resist point loads, a texture that stays safe when wet and a topcoat that cleans up with a quick rinse.</p>
        <ul class="checks up">
          <li>Flake blends that hide sand and water spots between washes</li>
          <li>Heavier builds where trailers and jacks sit</li>
          <li>Coatings that wrap the stem walls for a clean, washable edge</li>
          <li>Carport and RV slab coatings with UV-stable tops</li>
        </ul>
        <p class="up">See <a href="/garage-floor-coatings/">garage floor coatings</a>, or read about <a href="/polyurea-floor-coatings/">polyurea</a> for shops and heavy-use bays.</p>
      </div>
    </div>
  </section>

  <section class="river" aria-labelledby="river-h">
    <div class="river__bg" aria-hidden="true" style="background-image:url(${bg('riverBand', 2200)})" data-drift></div>
    <div class="river__veil" aria-hidden="true"></div>
    <div class="wrap river__in">
      <p class="eyebrow eyebrow--light up">Free estimates along the river</p>
      <h2 id="river-h" class="up">Spend the weekend on the water, not scrubbing the garage.</h2>
      <p class="up">A sealed floor rinses clean after a day at the river. Book a visit and we’ll bring samples, measure the space and leave you with a written quote.</p>
      <div class="river__btns up"><button type="button" class="btn btn--sand" data-open-est aria-haspopup="dialog">Get a free estimate</button><a class="btn btn--ghost" href="tel:${site.phone.tel}">Call ${site.phone.display}</a></div>
    </div>
  </section>

  <section class="sec process" aria-labelledby="process-h">
    <div class="wrap">
      <div class="head head--center up"><p class="eyebrow">How a project runs</p><h2 id="process-h">From first call to first parked car.</h2></div>
      <ol class="flow">
        <li class="up"><span class="flow__dot">1</span><h3>Visit &amp; quote</h3><p>We look at the slab, test moisture, measure, show samples and send a written, itemized quote.</p></li>
        <li class="up"><span class="flow__dot">2</span><h3>Grind &amp; repair</h3><p>Diamond grinding opens the surface. Cracks, pits and spalls are filled and ground flush.</p></li>
        <li class="up"><span class="flow__dot">3</span><h3>Base coat</h3><p>A penetrating base coat soaks into the open concrete and forms the bond for everything that follows.</p></li>
        <li class="up"><span class="flow__dot">4</span><h3>Color layer</h3><p>Flake broadcast, solid color build or hand-worked metallic — depending on the finish you picked.</p></li>
        <li class="up"><span class="flow__dot">5</span><h3>Topcoat &amp; walkthrough</h3><p>A clear, UV-stable top locks it in. We walk the floor with you and explain cure and care.</p></li>
      </ol>
      <figure class="process__pic pop">${img('crewTrowel', { sizes: '(max-width: 900px) 92vw, 1100px' })}<figcaption>Coatings go down in measured batches so each section is worked before the material begins to set.</figcaption></figure>
    </div>
  </section>

  <section class="sec sec--aqua finish" aria-labelledby="finish-h">
    <div class="wrap finish__grid">
      <div class="finish__copy">
        <p class="eyebrow up">Benefits by finish</p>
        <h2 id="finish-h" class="up">Choose a look. We’ll match the system to it.</h2>
        <p class="up">Most people start with how they want the floor to look and work backward. That is a good way to do it. Tap a finish to see what it does well and where it fits best.</p>
        <div class="chips up" role="group" aria-label="Finish options">
          ${finishes.map((f, i) => `<button type="button" class="chip" aria-pressed="${i === 0}" data-finish="${f.k}">${f.name}</button>`).join('')}
        </div>
        <div class="finish__out up" data-finish-out>
          ${finishes.map((f, i) => `<div class="finish__item" data-finish-item="${f.k}"${i === 0 ? '' : ' data-hide'}><p>${esc(f.t)}</p><a href="${f.link}">Learn more about ${f.name.toLowerCase()} floors</a></div>`).join('')}
        </div>
      </div>
      <div class="finish__pics up">
        ${finishes.map((f, i) => `<figure class="finish__pic${i === 0 ? ' is-on' : ''}" data-finish-pic="${f.k}">${img(f.img, { sizes: '(max-width: 900px) 92vw, 44vw' })}</figure>`).join('')}
      </div>
    </div>
  </section>

  <section class="sec home-int" aria-labelledby="int-h">
    <div class="wrap duo">
      <div class="duo__copy">
        <p class="eyebrow up">Residential flooring</p>
        <h2 id="int-h" class="up">Inside the house, too.</h2>
        <p class="up">Seamless coatings make a lot of sense indoors in a dusty climate. With no grout lines, no carpet fibers and no seams for sand to settle into, a coated floor sweeps clean in a few minutes. It also feels cool underfoot during the long summer, which is part of why polished and coated concrete has become so popular in desert homes.</p>
        <p class="up">We coat living areas, kitchens, laundry rooms, casitas, home gyms and garages that have been converted into living space. Interior systems use low-odor materials and are finished in satin or gloss. If you want a floor that becomes the centerpiece of the room, a metallic finish brings in the blues, sands and grays of the landscape outside.</p>
        <p class="up">Before any interior work we test the slab for moisture, because a slab that pushes vapor will eventually push a coating off. If readings are high, we use a moisture-tolerant primer or recommend a different approach. Learn more about <a href="/residential-epoxy-flooring/">residential epoxy flooring</a> and <a href="/metallic-epoxy-flooring/">metallic floors</a>.</p>
      </div>
      <div class="duo__pics">
        <figure class="duo__big pop">${img('living', { sizes: '(max-width: 900px) 92vw, 40vw' })}</figure>
        <figure class="duo__small pop">${img('homeGym', { sizes: '(max-width: 900px) 60vw, 22vw' })}</figure>
      </div>
    </div>
  </section>

  <section class="sec sec--sand outdoor" aria-labelledby="out-h">
    <div class="wrap duo duo--flip">
      <div class="duo__copy">
        <p class="eyebrow up">Patios &amp; pool decks</p>
        <h2 id="out-h" class="up">Outdoor concrete that you can actually walk on in August.</h2>
        <p class="up">Dark or bare concrete in full sun gets hot enough to hurt. Lighter coatings reflect more of that sunlight and stay noticeably more comfortable, and a textured finish keeps wet feet from slipping around the pool. We coat patios, pool decks, entry walks, covered porches and the slabs under carports and shade structures.</p>
        <p class="up">Outdoor surfaces in this valley take a beating from more than heat. Monsoon storms drop heavy rain in a short time, wind drives sand across every surface, and irrigation overspray leaves mineral spots. We use UV-stable, breathable systems, repair cracks first and leave control joints able to move. Read more on our <a href="/patio-concrete-coatings/">patio and concrete coatings</a> page.</p>
      </div>
      <div class="duo__pics">
        <figure class="duo__big pop">${img('loungers', { sizes: '(max-width: 900px) 92vw, 40vw' })}</figure>
        <figure class="duo__small pop">${img('pebble', { sizes: '(max-width: 900px) 60vw, 22vw' })}</figure>
      </div>
    </div>
  </section>

  <section class="sec biz" aria-labelledby="biz-h">
    <div class="wrap">
      <div class="head up"><p class="eyebrow">Commercial &amp; industrial flooring</p><h2 id="biz-h">For the businesses that keep the valley running.</h2><p>Highway 95 is lined with shops, clinics, restaurants, storage facilities and service businesses. Their floors need to look clean, stay safe and handle traffic that never really stops. We schedule around operating hours and work in phases when a space cannot close.</p></div>
      <div class="biz__grid">
        <a class="bz up" href="/commercial-epoxy-flooring/"><figure>${img('detailers', { sizes: '(max-width: 700px) 92vw, 30vw', alt: '' })}</figure><h3>Auto, marine &amp; detail shops</h3><p>Chemical-resistant floors that handle oil, solvents and constant wash-down.</p></a>
        <a class="bz up" href="/commercial-epoxy-flooring/"><figure>${img('salon', { sizes: '(max-width: 700px) 92vw, 30vw', alt: '' })}</figure><h3>Salons, clinics &amp; offices</h3><p>Seamless, easy-to-sanitize floors that look polished from the front door.</p></a>
        <a class="bz up" href="/commercial-epoxy-flooring/"><figure>${img('brewery', { sizes: '(max-width: 700px) 92vw, 30vw', alt: '' })}</figure><h3>Restaurants, breweries &amp; food service</h3><p>Slip-conscious textures and cove details for kitchens and prep areas.</p></a>
        <a class="bz up" href="/warehouse-floor-coatings/"><figure>${img('hangarSmall', { sizes: '(max-width: 700px) 92vw, 30vw', alt: '' })}</figure><h3>Hangars &amp; storage</h3><p>Bright, reflective floors that brighten the space and resist hot tires and fluids.</p></a>
        <a class="bz up" href="/warehouse-floor-coatings/"><figure>${img('warehouse', { sizes: '(max-width: 700px) 92vw, 30vw', alt: '' })}</figure><h3>Warehouses &amp; distribution</h3><p>Dust-proofing, forklift-rated systems and clear aisle striping.</p></a>
        <a class="bz up" href="/warehouse-floor-coatings/"><figure>${img('workshop', { sizes: '(max-width: 700px) 92vw, 30vw', alt: '' })}</figure><h3>Fabrication &amp; trades</h3><p>Impact-resistant builds for welding bays, cabinet shops and contractor yards.</p></a>
      </div>
    </div>
  </section>

  <section class="sec sec--shell local" aria-labelledby="local-h">
    <div class="wrap local__grid">
      <div>
        <p class="eyebrow up">Local property requirements</p>
        <h2 id="local-h" class="up">What we look for on Fort Mohave properties.</h2>
        <p class="up">Every property along the river corridor is a little different, but a few conditions come up again and again. Knowing them ahead of time keeps a project on schedule and out of trouble later.</p>
        <figure class="local__pic pop">${img('garageDark', { sizes: '(max-width: 900px) 92vw, 36vw' })}</figure>
      </div>
      <dl class="notes">
        <div class="up"><dt>Sealed or painted slabs</dt><dd>Many garages here were sealed by a builder or rolled with garage paint years ago. Both block adhesion and must be ground off completely before any new system goes down.</dd></div>
        <div class="up"><dt>Moisture from below</dt><dd>Irrigated landscaping, older slabs without vapor barriers and areas near the river can push moisture up through concrete. We test before quoting and adjust the primer if needed.</dd></div>
        <div class="up"><dt>Big temperature swings</dt><dd>Slabs expand in summer heat and contract on cold winter nights. Flexible base coats and honored control joints keep the coating from cracking along with the concrete.</dd></div>
        <div class="up"><dt>Detached shops &amp; outbuildings</dt><dd>Many lots include a separate shop, RV garage or storage building. These slabs are often thinner or less finished than the house, so they get a closer look during the estimate.</dd></div>
        <div class="up"><dt>Community guidelines</dt><dd>Golf-course and planned neighborhoods may have rules for visible exterior surfaces. We provide samples and product sheets for any approval you need.</dd></div>
        <div class="up"><dt>Seasonal residents</dt><dd>If you spend part of the year away, we can schedule work around your plans and coordinate access with a neighbor or property manager.</dd></div>
      </dl>
    </div>
  </section>

  <section class="sec gallery" aria-labelledby="gal-h">
    <div class="wrap"><div class="head up"><p class="eyebrow">Gallery</p><h2 id="gal-h">Floors, finishes and spaces.</h2><p>A look at the kinds of spaces and finishes we work with — scroll or drag to browse.</p></div></div>
    <div class="strip" tabindex="0" aria-label="Image gallery, scrollable" data-strip>
      ${gallery.map((k) => `<figure class="strip__i">${img(k, { sizes: '(max-width: 700px) 78vw, 30vw' })}</figure>`).join('')}
    </div>
  </section>

  <section class="sec sec--sand where" aria-labelledby="where-h">
    <div class="wrap where__grid">
      <div>
        <p class="eyebrow up">Service areas</p>
        <h2 id="where-h" class="up">Up and down the river.</h2>
        <p class="up">We are based in Fort Mohave and work throughout the surrounding valley, from Bullhead City in the north to Golden Shores and Topock in the south. Staying close to home keeps estimates quick and makes it easy to return for follow-up or additional work.</p>
        <a class="btn btn--river up" href="/service-areas/">See all service areas</a>
      </div>
      <ul class="where__list">${areas.map((a) => `<li class="up"><h3>${esc(a.name)}</h3><p>${esc(a.note)}</p></li>`).join('')}</ul>
    </div>
  </section>

  <section class="sec faq" aria-labelledby="faq-h">
    <div class="wrap">
      <div class="head head--center up"><p class="eyebrow">FAQ</p><h2 id="faq-h">Questions we hear most.</h2></div>
      <div class="acc">${faqs.map((f) => `<details class="acc__i up"><summary>${esc(f.q)}</summary><div class="acc__a"><p>${md(f.a)}</p></div></details>`).join('')}</div>
    </div>
  </section>

  <section class="sec sec--aqua last" aria-labelledby="last-h" id="estimate">
    <div class="wrap last__grid">
      <div class="last__copy">
        <p class="eyebrow up">Start your project</p>
        <h2 id="last-h" class="up">Let’s look at your floor.</h2>
        <p class="up">Tell us a little about the space and how you use it. We’ll call to set up a visit, check the slab and bring samples so you can see colors in your own light.</p>
        <ul class="checks up"><li>Free, no-obligation estimate</li><li>Moisture and crack assessment</li><li>Written quote with every coat listed</li></ul>
        <p class="last__tel up">Prefer to talk? <a href="tel:${site.phone.tel}">${site.phone.display}</a></p>
      </div>
      <div class="up">${estForm({ id: 'home-f', layout: 'pair', notes: true, title: 'Request a free estimate' })}</div>
    </div>
  </section>
</main>`;
  return head({
    title: 'Epoxy Flooring Fort Mohave AZ | Garage, Patio & Shop Floor Coatings',
    description: 'Epoxy, polyaspartic and flake floor coatings in Fort Mohave, AZ for garages, boat and RV storage, interiors, patios, shops and warehouses. Free on-site estimates.',
    path: '/',
    schema: [businessSchema(), websiteSchema(), faqSchema(faqs)],
  }) + header('home') + body + footer();
}
