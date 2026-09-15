/* Delhi Palace, shared behaviour for every internal page.
   Written so that a failure anywhere can never hide page content. */
document.documentElement.classList.add('js');

(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- navbar ---- */
  var nav = document.getElementById('navbar');
  function onScrollNav() { if (nav) nav.classList.toggle('stuck', window.scrollY > 40); }
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  /* ---- mobile menu ---- */
  var burger = document.getElementById('hamburger');
  var menu = document.getElementById('mobileMenu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) { burger.click(); }
    });
  }

  /* ---- scroll reveal, fail safe ---- */
  window.DP_reveal = function (root) {
    var els = [].slice.call((root || document).querySelectorAll('.reveal:not(.in)'));
    if (!els.length) return;
    if (!('IntersectionObserver' in window) || reduce) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    els.forEach(function (el) { io.observe(el); });
    setTimeout(function () { els.forEach(function (el) { el.classList.add('in'); }); }, 4000);
  };
  window.DP_reveal();

  /* ---- year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- reserve space for the mobile sticky order bar ---- */
  if (document.querySelector('.sticky-order')) {
    document.body.classList.add('has-sticky-order');
  }
})();

window.addEventListener('load', function () {
  var btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', function () {
      btt.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }
  var sp = document.getElementById('scrollProgress');
  if (sp) {
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY || window.pageYOffset || 0;
      var total = document.documentElement.scrollHeight - window.innerHeight;
      sp.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
    }, { passive: true });
  }
});
