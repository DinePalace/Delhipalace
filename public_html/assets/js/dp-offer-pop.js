/* ==========================================================================
   DELHI PALACE: 15% off dine-in offer, floating image (added 2026-10)
   Builds its own markup. The offer image slides into the bottom right corner
   shortly after page load and links to FoodMe. The small x hides it.
   ========================================================================== */
(function () {
  "use strict";

  var LINK = "https://orders.foodme.mobi/dt/delhipalace/brantford/main";
  var IMG = "/assets/img/promo-15-off-dine-in.webp";

  function init() {
    var box = document.createElement("aside");
    box.className = "dp-offer-float";
    box.setAttribute("aria-label", "15% off dine-in offer");
    box.innerHTML =
      '<button class="dp-offer-float__close" type="button" aria-label="Close offer">&times;</button>' +
      '<a class="dp-offer-float__link" href="' + LINK + '" target="_blank" rel="noopener" aria-label="Order from Delhi Palace on FoodMe">' +
        '<img class="dp-offer-float__img" src="' + IMG + '" width="1080" height="1350" decoding="async" ' +
        'alt="15% off on all orders, for dine-in only, plus a free piece of gulab jamun. Limited time special at Delhi Palace, 46 Dalhousie St, Brantford.">' +
      '</a>';
    document.body.appendChild(box);

    box.querySelector(".dp-offer-float__close").addEventListener("click", function () {
      box.classList.remove("is-in");
      window.setTimeout(function () { box.hidden = true; }, 450);
    });

    /* sit just above the back-to-top arrow, wherever the page puts it */
    var btt = document.getElementById("backToTop");
    function place() {
      if (!btt) return;
      var cs = window.getComputedStyle(btt);
      var b = parseFloat(cs.bottom) || 16;
      var h = parseFloat(cs.height) || 46;
      box.style.bottom = (b + h + 14) + "px";
    }
    place();
    window.addEventListener("resize", place);

    window.setTimeout(function () { box.classList.add("is-in"); }, 900);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
