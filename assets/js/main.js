/* Golderos Benelux — gedeelde interacties */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");

  /* Sticky header: vast vanaf kleine scroll */
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-solid", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobiel menu */
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Scroll-reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Jaartal in footer */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Contactformulier: client-side validatie + mailto-fallback.
     TODO: vervang door een echte form-backend (bv. Formspree) zodra beschikbaar. */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var data = new FormData(form);
      var subject = form.getAttribute("data-mail-subject") + " — " + data.get("subject");
      var body =
        form.getAttribute("data-mail-intro") + "\n\n" +
        data.get("name") + " <" + data.get("email") + ">" +
        (data.get("phone") ? " · " + data.get("phone") : "") + "\n\n" +
        data.get("message");

      window.location.href =
        "mailto:" + form.getAttribute("data-mail-to") +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      var feedback = document.getElementById("form-feedback");
      if (feedback) feedback.classList.add("is-visible");
    });
  }
})();
