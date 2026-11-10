/* Fort Mohave Epoxy — site interactions */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.remove('no-js'); root.classList.add('js');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var q = function (s, c) { return (c || document).querySelector(s); };
  var qa = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* Sticky bar state */
  var bar = q('[data-bar]');
  var onScroll = function () { if (bar) bar.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* Services dropdown */
  qa('[data-drop]').forEach(function (btn) {
    var li = btn.parentElement;
    var set = function (open) { li.classList.toggle('is-open', open); btn.setAttribute('aria-expanded', String(open)); };
    var hover = window.matchMedia('(hover: hover)');
    btn.addEventListener('click', function (e) { e.stopPropagation(); set(!li.classList.contains('is-open')); });
    li.addEventListener('mouseenter', function () { if (hover.matches) set(true); });
    li.addEventListener('mouseleave', function () { if (hover.matches) set(false); });
    li.addEventListener('focusout', function (e) { if (!li.contains(e.relatedTarget)) set(false); });
    li.addEventListener('keydown', function (e) { if (e.key === 'Escape') { set(false); btn.focus(); } });
    document.addEventListener('click', function (e) { if (!li.contains(e.target)) set(false); });
  });

  /* Mobile drawer */
  var burger = q('[data-burger]'), drawer = q('[data-drawer]');
  if (burger && drawer) {
    var setDrawer = function (open) {
      burger.setAttribute('aria-expanded', String(open)); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      drawer.hidden = !open; document.body.classList.toggle('is-locked', open);
    };
    burger.addEventListener('click', function () { setDrawer(burger.getAttribute('aria-expanded') !== 'true'); });
    qa('a', drawer).forEach(function (a) { a.addEventListener('click', function () { setDrawer(false); }); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1000 && !drawer.hidden) setDrawer(false); });
  }

  /* Estimate dialog */
  var est = q('[data-est]'), lastFocus = null;
  var openEst = function () {
    if (!est) return;
    lastFocus = document.activeElement;
    if (drawer && !drawer.hidden && burger) burger.click();
    if (typeof est.showModal === 'function') est.showModal(); else est.setAttribute('open', '');
    document.body.classList.add('is-locked');
    setTimeout(function () { var f = q('input[name="name"]', est); if (f) f.focus(); }, 50);
  };
  var closeEst = function () { if (!est) return; if (est.open && typeof est.close === 'function') est.close(); else est.removeAttribute('open'); };
  if (est) {
    est.addEventListener('close', function () { document.body.classList.remove('is-locked'); if (lastFocus && lastFocus.focus) lastFocus.focus(); });
    est.addEventListener('click', function (e) { if (e.target === est) closeEst(); });
    qa('[data-close-est]', est).forEach(function (b) { b.addEventListener('click', closeEst); });
  }
  qa('[data-open-est]').forEach(function (b) { b.addEventListener('click', openEst); });

  /* Lead forms */
  var rules = {
    name: function (v) { return v.trim().length >= 2 ? '' : 'Please enter your name.'; },
    phone: function (v) { return v.replace(/\D/g, '').length >= 10 ? '' : 'Enter a 10-digit phone number.'; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email address.'; },
    project: function (v) { return v ? '' : 'Choose a project type.'; }
  };
  var check = function (el) {
    var rule = rules[el.name]; if (!rule) return true;
    var msg = rule(el.value || ''), out = document.getElementById(el.id + '-e');
    if (out) out.textContent = msg;
    if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
    return !msg;
  };
  qa('[data-lead]').forEach(function (form) {
    var note = q('.ef__note', form);
    qa('input, select', form).forEach(function (el) {
      el.addEventListener('blur', function () { if (el.value) check(el); });
      el.addEventListener('input', function () { if (el.getAttribute('aria-invalid')) check(el); });
      el.addEventListener('change', function () { if (el.getAttribute('aria-invalid')) check(el); });
    });
    var tel = q('input[type="tel"]', form);
    if (tel) tel.addEventListener('input', function () {
      var d = tel.value.replace(/\D/g, ''); if (d.length === 11 && d.charAt(0) === '1') d = d.slice(1); d = d.slice(0, 10);
      if (d.length >= 7) tel.value = '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6);
      else if (d.length >= 4) tel.value = '(' + d.slice(0, 3) + ') ' + d.slice(3);
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = qa('input[name], select[name]', form).filter(function (el) { return !check(el); });
      if (bad.length) { note.className = 'ef__note no'; note.textContent = 'Please check the highlighted fields.'; bad[0].focus(); return; }
      var data = {}; new FormData(form).forEach(function (v, k) { data[k] = v; }); data.page = location.pathname;
      form.classList.add('is-busy'); note.className = 'ef__note'; note.textContent = 'Sending…';
      fetch(form.getAttribute('action'), { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok && j.ok, j: j }; }, function () { return { ok: false, j: {} }; }); })
        .then(function (res) {
          form.classList.remove('is-busy');
          if (res.ok) { form.classList.add('is-done'); note.className = 'ef__note ok'; note.textContent = 'Thanks, ' + String(data.name).trim().split(' ')[0] + '! We received your request and will call within one business day.'; }
          else { note.className = 'ef__note no'; note.textContent = (res.j && res.j.error) || 'Something went wrong. Please try again or give us a call.'; }
        })
        .catch(function () { form.classList.remove('is-busy'); note.className = 'ef__note no'; note.textContent = 'Connection problem. Please try again or give us a call.'; });
    });
  });

  /* Tabs */
  qa('[data-tabs]').forEach(function (box) {
    var tabs = qa('[role="tab"]', box);
    var select = function (t, focus) {
      tabs.forEach(function (x) {
        var on = x === t, p = document.getElementById(x.getAttribute('aria-controls'));
        x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1;
        if (on) { p.removeAttribute('data-hide'); p.classList.remove('is-in'); void p.offsetWidth; p.classList.add('is-in'); } else p.setAttribute('data-hide', '');
      });
      if (focus) t.focus();
    };
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') n = tabs[0]; if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
  });

  /* Finish chooser */
  var chips = qa('[data-finish]');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      var k = c.getAttribute('data-finish');
      chips.forEach(function (x) { x.setAttribute('aria-pressed', String(x === c)); });
      qa('[data-finish-item]').forEach(function (it) { if (it.getAttribute('data-finish-item') === k) it.removeAttribute('data-hide'); else it.setAttribute('data-hide', ''); });
      qa('[data-finish-pic]').forEach(function (p) { p.classList.toggle('is-on', p.getAttribute('data-finish-pic') === k); });
    });
  });

  /* Reveal on scroll */
  var items = qa('.up, .pop');
  if (calm || !('IntersectionObserver' in window)) items.forEach(function (el) { el.classList.add('in'); });
  else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) {
      var sibs = el.parentElement ? qa(':scope > .up', el.parentElement) : [], n = sibs.indexOf(el);
      if (n > 0) el.style.setProperty('--d', Math.min(n * 0.08, 0.48) + 's');
      io.observe(el);
    });
  }

  /* Parallax drift on the river band */
  var drift = qa('[data-drift]');
  if (!calm && drift.length) {
    var ticking = false;
    var move = function () {
      drift.forEach(function (el) { var r = el.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return; el.style.setProperty('--drift', ((r.top + r.height / 2 - innerHeight / 2) * -0.14).toFixed(1) + 'px'); });
      ticking = false;
    };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(move); } }, { passive: true }); move();
  }

  /* Counters */
  if (!calm && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return; co.unobserve(en.target);
        var el = en.target, end = +el.getAttribute('data-num'), suf = el.getAttribute('data-suffix') || '', t0 = null;
        var step = function (ts) { t0 = t0 || ts; var k = Math.min((ts - t0) / 1300, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    qa('[data-num]').forEach(function (el) { co.observe(el); });
  }

  /* Drag-to-scroll gallery */
  qa('[data-strip]').forEach(function (s) {
    var down = false, x0 = 0, l0 = 0, moved = false;
    s.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; down = true; moved = false; x0 = e.clientX; l0 = s.scrollLeft; s.classList.add('is-drag'); });
    window.addEventListener('pointermove', function (e) { if (!down) return; var dx = e.clientX - x0; if (Math.abs(dx) > 3) moved = true; s.scrollLeft = l0 - dx; });
    window.addEventListener('pointerup', function () { if (!down) return; down = false; s.classList.remove('is-drag'); });
    s.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
    s.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { s.scrollBy({ left: 320, behavior: calm ? 'auto' : 'smooth' }); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { s.scrollBy({ left: -320, behavior: calm ? 'auto' : 'smooth' }); e.preventDefault(); }
    });
  });

  /* Table of contents highlight */
  var tocLinks = qa('.toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) { tocLinks.forEach(function (a) { a.classList.remove('is-here'); }); map[en.target.id].classList.add('is-here'); }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) { var el = document.getElementById(id); if (el) so.observe(el); });
  }
})();
