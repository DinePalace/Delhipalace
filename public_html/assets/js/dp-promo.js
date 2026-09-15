/* ==========================================================================
   DELHI PALACE — promo pop-up
   Self-contained. Opens automatically shortly after page load on every page
   it is placed on. Close: button, backdrop click or Escape.
   ========================================================================== */
(function () {
  "use strict";

  var pop = document.querySelector("[data-dp-pop]");
  if (!pop) return;

  var dialog = pop.querySelector(".dp-pop__dialog");
  var closeBtn = pop.querySelector("[data-dp-pop-close]");
  var lastFocused = null;

  function openPop() {
    if (pop.classList.contains("is-open")) return;
    lastFocused = document.activeElement;
    pop.classList.add("is-open");
    pop.removeAttribute("hidden");
    pop.setAttribute("aria-hidden", "false");
    document.body.classList.add("dp-pop-open");
    if (closeBtn) {
      try { closeBtn.focus({ preventScroll: true }); } catch (e) { closeBtn.focus(); }
    }
  }

  function closePop() {
    if (!pop.classList.contains("is-open")) return;
    pop.classList.remove("is-open");
    pop.setAttribute("aria-hidden", "true");
    pop.setAttribute("hidden", "");
    document.body.classList.remove("dp-pop-open");
    if (lastFocused && typeof lastFocused.focus === "function") {
      try { lastFocused.focus({ preventScroll: true }); } catch (e) {}
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closePop);

  pop.addEventListener("click", function (e) {
    if (dialog && !dialog.contains(e.target)) closePop();
  });

  document.addEventListener("keydown", function (e) {
    if ((e.key === "Escape" || e.key === "Esc") && pop.classList.contains("is-open")) {
      closePop();
    }
  });

  /* Keep focus inside the dialog while it is open */
  pop.addEventListener("keydown", function (e) {
    if (e.key !== "Tab" || !dialog) return;
    var items = dialog.querySelectorAll('a[href], button:not([disabled])');
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  function schedule() {
    window.setTimeout(openPop, 800);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", schedule);
  } else {
    schedule();
  }
})();

/* ==========================================================================
   Guest favourites carousel: arrows, drag-to-scroll, edge state
   ========================================================================== */
(function () {
  "use strict";
  var rail = document.getElementById("favRail");
  if (!rail) return;
  var prev = document.getElementById("favPrev");
  var next = document.getElementById("favNext");

  function step() {
    var card = rail.querySelector(".dp-fav");
    return card ? card.getBoundingClientRect().width + 18 : 300;
  }
  function update() {
    var max = rail.scrollWidth - rail.clientWidth - 4;
    if (prev) prev.disabled = rail.scrollLeft <= 4;
    if (next) next.disabled = rail.scrollLeft >= max;
  }
  if (prev) prev.addEventListener("click", function () { rail.scrollBy({ left: -step() * 2, behavior: "smooth" }); });
  if (next) next.addEventListener("click", function () { rail.scrollBy({ left: step() * 2, behavior: "smooth" }); });
  rail.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  /* drag to scroll (mouse); suppress the click that ends a real drag */
  var down = false, moved = false, startX = 0, startLeft = 0;
  rail.addEventListener("pointerdown", function (e) {
    if (e.pointerType !== "mouse") return;
    down = true; moved = false; startX = e.clientX; startLeft = rail.scrollLeft;
  });
  rail.addEventListener("pointermove", function (e) {
    if (!down) return;
    var dx = e.clientX - startX;
    if (Math.abs(dx) > 6) {
      moved = true;
      rail.classList.add("dragging");
      rail.scrollLeft = startLeft - dx;
    }
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach(function (ev) {
    rail.addEventListener(ev, function () {
      down = false;
      rail.classList.remove("dragging");
    });
  });
  rail.addEventListener("click", function (e) {
    if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
  }, true);
})();

/* ==========================================================================
   Homepage photo lightbox: any .dp-view link opens its image in an overlay
   instead of navigating. Without JS the link still opens the image itself.
   ========================================================================== */
(function () {
  "use strict";
  var views = document.querySelectorAll(".dp-view");
  if (!views.length) return;

  var lite = document.createElement("div");
  lite.className = "dp-lite";
  lite.setAttribute("role", "dialog");
  lite.setAttribute("aria-modal", "true");
  lite.setAttribute("aria-label", "Photo viewer");
  lite.hidden = true;
  lite.innerHTML =
    '<div class="dp-lite__backdrop"></div>' +
    '<figure>' +
      '<button class="dp-lite__close" type="button" aria-label="Close photo">&times;</button>' +
      '<img alt="">' +
      '<figcaption></figcaption>' +
    '</figure>';
  document.body.appendChild(lite);

  var img = lite.querySelector("img");
  var cap = lite.querySelector("figcaption");
  var closeBtn = lite.querySelector(".dp-lite__close");
  var lastFocused = null;

  function open(src, caption, alt) {
    lastFocused = document.activeElement;
    img.src = src;
    img.alt = alt || caption || "";
    cap.textContent = caption || "";
    lite.hidden = false;
    requestAnimationFrame(function () { lite.classList.add("is-open"); });
    try { closeBtn.focus({ preventScroll: true }); } catch (e) { closeBtn.focus(); }
  }
  function close() {
    lite.classList.remove("is-open");
    window.setTimeout(function () { lite.hidden = true; img.src = ""; }, 300);
    if (lastFocused && lastFocused.focus) { try { lastFocused.focus({ preventScroll: true }); } catch (e) {} }
  }

  [].forEach.call(views, function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var inner = a.querySelector("img");
      open(a.getAttribute("href"), a.getAttribute("data-cap"), inner ? inner.alt : "");
    });
  });
  closeBtn.addEventListener("click", close);
  lite.addEventListener("click", function (e) {
    if (!e.target.closest("figure") || e.target === closeBtn) return;
  });
  lite.querySelector(".dp-lite__backdrop").addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if ((e.key === "Escape" || e.key === "Esc") && lite.classList.contains("is-open")) close();
  });
})();
