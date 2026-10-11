// Footer year
document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Contact form: send without leaving the page; falls back to a normal submit if anything fails.
var form = document.getElementById("quote-form");
if (form && window.fetch) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var status = document.getElementById("form-status");
    var button = form.querySelector("button[type=submit]");
    button.disabled = true;
    status.className = "form-status";
    status.textContent = "Sending…";
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    }).then(function (r) {
      if (r.ok) {
        form.reset();
        status.className = "form-status ok";
        status.textContent = "Message sent. We will reply by email.";
      } else {
        throw new Error("bad response");
      }
    }).catch(function () {
      status.className = "form-status err";
      status.textContent = "The message could not be sent. Please email us directly at the address on this page.";
    }).finally(function () {
      button.disabled = false;
    });
  });
}

var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Services dropdown: tap or click the arrow, Escape or an outside click closes it.
document.querySelectorAll(".has-sub").forEach(function (item) {
  var btn = item.querySelector(".sub-toggle");
  function setOpen(open) {
    item.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(!item.classList.contains("open"));
  });
  document.addEventListener("click", function (e) {
    if (!item.contains(e.target)) setOpen(false);
  });
  item.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { setOpen(false); btn.focus(); }
  });
});

// Scroll reveal: items ease in as they come into view.
if (!reduce && "IntersectionObserver" in window) {
  var groups = [".trio > div", ".steps li", ".svc", ".statements li", ".facts", ".table-wrap", ".details div", "form"];
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  groups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = Math.min(i, 4) * 90 + "ms";
      io.observe(el);
    });
  });
}

// Page transition: fade out before moving to another page of the site.
if (!reduce) {
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (a.target && a.target !== "_self") return;
    var url = new URL(a.href, location.href);
    if (url.origin !== location.origin && location.protocol !== "file:") return;
    if (!/\.html?$|\/$/.test(url.pathname) || url.pathname === location.pathname) return;
    if (a.hasAttribute("download") || a.protocol === "mailto:" || a.protocol === "tel:") return;
    e.preventDefault();
    document.body.classList.add("leaving");
    setTimeout(function () { location.href = a.href; }, 220);
  });
  window.addEventListener("pageshow", function () { document.body.classList.remove("leaving"); });
}
