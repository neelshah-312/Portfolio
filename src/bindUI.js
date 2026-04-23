export function bindUI() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const topNav = document.getElementById("top-nav");
  function onScroll() {
    if (!topNav) return;
    const y = window.scrollY || document.documentElement.scrollTop;
    topNav.setAttribute("data-scrolled", y > 24 ? "true" : "false");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.getElementById("mobile-drawer");
  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      if (drawer.hasAttribute("hidden")) {
        drawer.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
      } else {
        drawer.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        drawer.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".row__track-wrap").forEach((wrap) => {
    const track = wrap.querySelector("[data-row-scroll]");
    if (!track) return;

    wrap.querySelectorAll(".row__chev").forEach((btn) => {
      btn.addEventListener("click", () => {
        const dir = Number(btn.getAttribute("data-scroll-dir") || "0");
        const delta = Math.round(track.clientWidth * 0.72) * dir;
        track.scrollBy({ left: delta, behavior: "smooth" });
      });
    });
  });
}
