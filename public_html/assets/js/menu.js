/* Delhi Palace, menu page.
   Renders every section, dish, price and description straight from menu-data.js.
   Nothing here edits content: it only lays it out. */
(function () {
  'use strict';
  if (typeof MENU === 'undefined') return;

  var host = document.getElementById('menuSections');
  var chips = document.getElementById('chipScroll');
  var search = document.getElementById('dishSearch');
  var none = document.getElementById('noResults');
  if (!host) return;

  /* full width photo breaks, placed between major groups */
  var BREAKS = {
    'hakka-appetizers': {
      img: 'menu-break-hakka', w: 1600,
      alt: 'Hakka noodles topped with chilli chicken at Delhi Palace'
    },
    'indian-veg-mains': {
      img: 'menu-break-veg', w: 1600,
      alt: 'A platter of golden vegetable pakora at Delhi Palace'
    }
  };

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* FüdMe online-ordering category links */
  var FM_BASE = 'https://orders.foodme.mobi/dt/delhipalace/brantford/';

  /* dish photo lookup: slug of the item name, with aliases for grouped items */
  function slugName(s) {
    return String(s).replace(/&amp;/g, 'and').toLowerCase()
      .replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  var IMG_ALIAS = {
    'chef-s-special-non-veg-platter': 'chefs-special-non-veg-platter',
    'steamed-fried-momos': 'steamed-momos-veg',
    'tandoori-momos': 'tandoori-momos-veg',
    'honey-chilli-momos': 'honey-chilli-momos-veg',
    'chilli-garlic-momos': 'chilli-garlic-momos-veg',
    'manchurian-style-momos': 'manchurian-style-momos-veg',
    'manchow-soup': 'manchow-soup-veg',
    'hot-and-sour-soup': 'hot-and-sour-soup-veg',
    'tomato-dhania-shorba': 'tomato-dhania-shorba-tomato',
    'butter-chicken': 'butter-chicken-boneless',
    'kadhai': 'kadhai-lamb',
    'madras': 'chicken-madras',
    'vindaloo': 'chicken-vindaloo',
    'saag': 'saag-chicken',
    'rara': 'rara-chicken',
    'rogan-josh': 'rogan-josh-lamb',
    'bhuna-gosht': 'bhuna-gosht-lamb',
    'fish-curry-masala': 'fish-curry',
    'manchurian-dry': 'veg-manchurian-dry',
    'chilli-dry': 'chicken-chilli-dry',
    'hakka-noodles': 'veg-hakka-noodles',
    'chilli-garlic-noodles': 'veg-chilli-garlic-noodles',
    'hakka-fried-rice': 'veg-hakka-fried-rice',
    'chilli-garlic-fried-rice': 'veg-chilli-garlic-fried-rice',
    'manchurian-gravy': 'veg-manchurian-gravy',
    'chilli-gravy': 'chicken-chilli-gravy',
    'lamb-goat-biryani': 'lamb-biryani',
    'tandoori-roti-butter-roti': 'tandoori-roti',
    'keema-naan': 'chicken-keema-naan',
    'ice-cream': 'ice-cream-2-scoops',
    'pops': 'coke',
    'shakes': 'mango-shake',
    'lassi': 'mango-lassi',
    'juices': 'mango-juice',
    'smoothies': 'mango-smoothie'
  };
  function dishImg(name) {
    if (typeof DISH_IMGS === 'undefined') return null;
    var s = slugName(name);
    if (DISH_IMGS[s]) return s;
    if (IMG_ALIAS[s] && DISH_IMGS[IMG_ALIAS[s]]) return IMG_ALIAS[s];
    return null;
  }

  var html = '';
  MENU.forEach(function (sec) {
    var n = sec.items.length;
    var secUrl = FM_BASE + (sec.fm || 'main');
    html += '<section class="menu-section" id="' + sec.id + '" data-sec="' + sec.id + '">' +
            '<div class="container">' +
              '<header class="cat-head reveal">' +
                '<div class="cat-head-img">' +
                  '<img src="/assets/img/cat-' + sec.id + '.webp" width="500" height="333" ' +
                       'loading="lazy" decoding="async" alt="' + esc(sec.title.replace(/&amp;/g, 'and')) + ' at Delhi Palace">' +
                '</div>' +
                '<div>' +
                  '<h2>' + sec.title + '</h2>' +
                  '<p class="cat-count">' + n + (n === 1 ? ' dish' : ' dishes') + '</p>' +
                '</div>' +
                '<span class="cat-rule" aria-hidden="true"></span>' +
                '<a class="cat-order" href="' + secUrl + '" target="_blank" rel="noopener">Order Online' +
                  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg></a>' +
              '</header>' +
              '<div class="dish-grid">';

    sec.items.forEach(function (d) {
      var img = dishImg(d.name);
      var itemUrl = FM_BASE + (d.fm || sec.fm || 'main');
      html += '<a class="dish" href="' + itemUrl + '" target="_blank" rel="noopener" ' +
                       'data-name="' + esc(d.name).toLowerCase() + '" ' +
                       'data-desc="' + esc(d.desc || '').toLowerCase() + '">' +
                (img ? '<span class="dish-thumb"><img src="/assets/img/dishes/' + img + '.webp" width="500" height="290" ' +
                       'loading="lazy" decoding="async" alt="' + esc(d.name.replace(/&amp;/g, 'and')) + ' at Delhi Palace, Brantford"></span>' : '') +
                '<div class="dish-main">' +
                  '<h3>' + d.name + '</h3>' +
                  (d.variants ? '<p class="variants">' + d.variants + '</p>' : '') +
                  (d.desc ? '<p>' + d.desc + '</p>' : '') +
                '</div>' +
                '<span class="price">' + d.price + '</span>' +
              '</a>';
    });

    html += '</div></div></section>';

    var br = BREAKS[sec.id];
    if (br) {
      html += '<div class="menu-break" data-break="' + sec.id + '">' +
                '<img src="/assets/img/' + br.img + '-1000.webp" ' +
                     'srcset="/assets/img/' + br.img + '-1000.webp 1000w, /assets/img/' + br.img + '.webp ' + br.w + 'w" ' +
                     'sizes="100vw" width="1600" height="686" loading="lazy" decoding="async" ' +
                     'alt="' + br.alt + '">' +
              '</div>';
    }
  });
  host.innerHTML = html;

  /* category chips */
  if (chips) {
    var c = '<button class="chip active" type="button" data-jump="all">All</button>';
    MENU.forEach(function (sec) {
      c += '<button class="chip" type="button" data-jump="' + sec.id + '">' + sec.title + '</button>';
    });
    chips.innerHTML = c;

    chips.addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (!b) return;
      [].forEach.call(chips.querySelectorAll('.chip'), function (x) { x.classList.remove('active'); });
      b.classList.add('active');
      var id = b.getAttribute('data-jump');
      if (id === 'all') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      var target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        var head = target.querySelector('.cat-head');
        if (head) {
          head.classList.remove('jumped');
          void head.offsetWidth;
          head.classList.add('jumped');
          setTimeout(function () { head.classList.remove('jumped'); }, 2000);
        }
      }
    });

    var prev = document.getElementById('railPrev');
    var next = document.getElementById('railNext');
    if (prev) prev.addEventListener('click', function () { chips.scrollBy({ left: -260, behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { chips.scrollBy({ left: 260, behavior: 'smooth' }); });

    /* scroll-spy: highlight the category you are reading and keep its chip in view */
    if ('IntersectionObserver' in window) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.getAttribute('data-sec');
          [].forEach.call(chips.querySelectorAll('.chip'), function (x) {
            var on = x.getAttribute('data-jump') === id;
            x.classList.toggle('active', on);
            if (on) {
              var left = x.offsetLeft - (chips.clientWidth - x.offsetWidth) / 2;
              chips.scrollTo({ left: left, behavior: 'smooth' });
            }
          });
        });
      }, { rootMargin: '-38% 0px -58% 0px', threshold: 0 });
      [].forEach.call(host.querySelectorAll('.menu-section'), function (s) { spy.observe(s); });
    }
  }

  /* dish search */
  if (search) {
    var dishes = [].slice.call(host.querySelectorAll('.dish'));
    var sections = [].slice.call(host.querySelectorAll('.menu-section'));
    var breaks = [].slice.call(host.querySelectorAll('.menu-break'));
    var t = null;

    function run() {
      var q = search.value.trim().toLowerCase();
      var hits = 0;

      if (!q) {
        dishes.forEach(function (d) { d.style.display = ''; });
        sections.forEach(function (s) { s.style.display = ''; });
        breaks.forEach(function (b) { b.style.display = ''; });
        if (none) none.classList.remove('show');
        return;
      }
      breaks.forEach(function (b) { b.style.display = 'none'; });
      sections.forEach(function (s) {
        var shown = 0;
        [].forEach.call(s.querySelectorAll('.dish'), function (d) {
          var m = d.getAttribute('data-name').indexOf(q) > -1 ||
                  d.getAttribute('data-desc').indexOf(q) > -1;
          d.style.display = m ? '' : 'none';
          if (m) { shown++; hits++; }
        });
        s.style.display = shown ? '' : 'none';
      });
      if (none) none.classList.toggle('show', hits === 0);
    }

    search.addEventListener('input', function () {
      clearTimeout(t);
      t = setTimeout(run, 120);
    });
  }

  if (window.DP_reveal) window.DP_reveal(host);
})();
