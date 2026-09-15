/* Delhi Palace, gallery page: category filters plus lightbox. */
(function () {
  'use strict';
  var grid = document.getElementById('galleryGrid');
  var filters = document.getElementById('galFilters');
  var lb = document.getElementById('lightbox');
  if (!grid) return;

  var items = [].slice.call(grid.querySelectorAll('.gal-item'));
  var visible = items.slice();

  /* ---- filters ---- */
  if (filters) {
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (!b) return;
      [].forEach.call(filters.querySelectorAll('.chip'), function (x) { x.classList.remove('active'); });
      b.classList.add('active');
      var cat = b.getAttribute('data-cat');
      visible = [];
      items.forEach(function (it) {
        var show = cat === 'all' || it.getAttribute('data-cat') === cat;
        it.classList.toggle('hide', !show);
        if (show) visible.push(it);
      });
    });
  }

  /* ---- lightbox ---- */
  if (!lb) return;
  var img = document.getElementById('lbImg');
  var cap = document.getElementById('lbCap');
  var idx = 0;
  var lastFocus = null;

  function open(item) {
    idx = visible.indexOf(item);
    if (idx < 0) idx = 0;
    lastFocus = document.activeElement;
    paint();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    var c = document.getElementById('lbClose');
    if (c) c.focus();
  }
  function paint() {
    var it = visible[idx];
    if (!it) return;
    var full = it.getAttribute('data-full');
    var thumb = it.querySelector('img');
    img.src = full || thumb.src;
    img.alt = thumb.alt || '';
    cap.textContent = it.getAttribute('data-cap') || '';
  }
  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    img.removeAttribute('src');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function step(n) {
    if (!visible.length) return;
    idx = (idx + n + visible.length) % visible.length;
    paint();
  }

  grid.addEventListener('click', function (e) {
    var it = e.target.closest('.gal-item');
    if (it) open(it);
  });
  grid.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var it = e.target.closest('.gal-item');
    if (it) { e.preventDefault(); open(it); }
  });

  var close_ = document.getElementById('lbClose');
  var prev_ = document.getElementById('lbPrev');
  var next_ = document.getElementById('lbNext');
  if (close_) close_.addEventListener('click', close);
  if (prev_) prev_.addEventListener('click', function () { step(-1); });
  if (next_) next_.addEventListener('click', function () { step(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });
})();
