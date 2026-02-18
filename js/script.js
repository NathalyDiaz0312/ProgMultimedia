/* ===== MODULO PRINCIPAL ===== */

const NathyFoodApp = (() => {

  /* ===== UTILIDADES ===== */

  const select = (selector, scope = document) =>
    scope.querySelector(selector);

  const selectAll = (selector, scope = document) =>
    scope.querySelectorAll(selector);

  const scrollToTopSmooth = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const clamp = (value, min, max) =>
    Math.max(min, Math.min(value, max));

  /* ===== MENU TOGGLE ===== */

  const initMobileMenu = () => {
    const toggleBtn = select("#menuToggle");
    const navMenu = select("#navLinks");
    const icon = select("#menuIcon");

    if (!toggleBtn || !navMenu || !icon) return;

    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const isActive = navMenu.classList.contains("active");
      icon.innerHTML = isActive ? "&#9747;" : "&#9776;";
    });
  };

  /* ===== NAVEGACION SPA ===== */

  const initSPANavigation = () => {
    const links = selectAll(".nav-links a, [data-page]");
    const sections = selectAll(".spa-section, .page");

    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();

        const targetId =
          link.dataset.section || link.getAttribute("data-page");

        sections.forEach(sec => sec.classList.remove("active"));

        const target = select(`#${targetId}`);
        if (target) target.classList.add("active");

        scrollToTopSmooth();
      });
    });
  };

  /* ===== ANIMACION DELIVERY ===== */

  const initDeliveryAnimation = () => {
    const bike = select("#data-delivery-boy");
    const section = select(".delivery");
    if (!bike || !section) return;

    window.addEventListener("scroll", () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        let progress = (windowHeight - rect.top) / windowHeight;
        progress = clamp(progress, 0, 1);
        bike.style.transform = `translateX(${progress * 120}px)`;
      }
    });
  };

  /* ===== CONTROLES VIDEO ===== */

  const initVideoControls = () => {
    const video = select("#Video");
    if (!video) return;

    window.playVideo = () => video.play();
    window.pauseVideo = () => video.pause();
  };

  /* ===== FILTRO MENU ===== */

  const initMenuFilter = () => {
    const buttons = selectAll(".menu-filter-btn");
    const items = selectAll(".menu-item");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.dataset.category;

        items.forEach(item => {
          const show =
            category === "todos" ||
            item.dataset.category === category;

          item.style.display = show ? "block" : "none";
        });
      });
    });
  };

  /* ===== INGREDIENTES ===== */

  const initIngredientsToggle = () => {
    const buttons = selectAll(".btn-ingredientes");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const ingredients = btn.nextElementSibling;
        ingredients.classList.toggle("active");

        btn.textContent =
          ingredients.classList.contains("active")
            ? "Ocultar ingredientes"
            : "Ver ingredientes";
      });
    });
  };

  /* ===== SCROLL TO TOP ===== */

  const initScrollTopButton = () => {
    const button = select("#scrollTopBtn");
    if (!button) return;

    window.addEventListener("scroll", () => {
      window.scrollY > 400
        ? button.classList.add("visible")
        : button.classList.remove("visible");
    });

    button.addEventListener("click", scrollToTopSmooth);
  };

  /* ===== SCROLL FLUIDO ===== */

  const initScrollReveal = () => {
    const elements = selectAll(".reveal");

    const reveal = () => {
      const windowHeight = window.innerHeight;

      elements.forEach(el => {
        if (el.getBoundingClientRect().top < windowHeight - 120) {
          el.classList.add("revealed");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    window.addEventListener("load", reveal);
  };

/* ===== SECCION DETALLES ===== */

  const initDetalles = () => {
    try {
      const detallesImg = select("#detallesImg");
      if (!detallesImg)
        throw new Error("Elemento #detallesImg no encontrado");

      detallesImg.style.transition = "transform 0.3s ease";

    } catch (error) {
      console.error("Error sección detalles:", error.message);

      const fallback = select(".detalles-image");
      if (fallback) fallback.style.display = "none";
    }
  };

  /* ===== INICIO GLOBAL ===== */

  const init = () => {
    initMobileMenu();
    initSPANavigation();
    initDeliveryAnimation();
    initVideoControls();
    initMenuFilter();
    initIngredientsToggle();
    initScrollTopButton();
    initScrollReveal();
    initDetalles();
  };

  return { init };

})();

document.addEventListener("DOMContentLoaded", NathyFoodApp.init);
