// ===== MENU TOGGLE =====
document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navLinks");
  const menuIcon = document.getElementById("menuIcon");

  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll(".spa-section");

  // Abrir / cerrar menú
  toggleBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      menuIcon.innerHTML = "&#9747;"; // X
    } else {
      menuIcon.innerHTML = "&#9776;"; // ☰
    }

  });

  // Navegación SPA
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {

      e.preventDefault();

      const targetId = link.dataset.section;

      sections.forEach(sec => sec.classList.remove("active"));
      document.getElementById(targetId).classList.add("active");

      window.scrollTo({ top: 0, behavior: "smooth" });

      // Cerrar menú automáticamente
      navMenu.classList.remove("active");
      menuIcon.innerHTML = "&#9776;";

    });
  });

});

// ===== NAVEGACIÓN SPA =====
const links = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");

links.forEach(link=>{
  link.addEventListener("click", ()=>{
    const page = link.getAttribute("data-page");
    pages.forEach(p=>p.classList.remove("active"));
    document.getElementById(page).classList.add("active");
    window.scrollTo(0,0);
  });
});


// ===== FILTRO MENU =====
var filterBtns = document.querySelectorAll('.menu-filter-btn');
var menuItems = document.querySelectorAll('.menu-item');

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    filterBtns.forEach(function (b) {
      b.classList.remove('active');
    });
    // Activar al hacer clip
    this.classList.add('active');

    var category = this.getAttribute('data-category');

    menuItems.forEach(function (item) {
      if (category === 'todos') {
        item.style.display = 'block';
      } else if (item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ===== INGREDIENTES MENU =====
document.addEventListener("DOMContentLoaded", () => {
  const botonesIngredientes = document.querySelectorAll(".btn-ingredientes");

  botonesIngredientes.forEach(btn => {
    btn.addEventListener("click", () => {

      const ingredientes = btn.nextElementSibling;

      ingredientes.classList.toggle("active");

      // Cambiar texto del botón dinámicamente
      if (ingredientes.classList.contains("active")) {
        btn.textContent = "Ocultar ingredientes";
      } else {
        btn.textContent = "Ver ingredientes";
      }

    });
  });

});

// ===== SCROLL TO TOP BUTTON =====
var scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SMOOTH SCROLL for all anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== SCROLL REVEAL ANIMATION =====
var revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  revealElements.forEach(function (el) {
    var windowHeight = window.innerHeight;
    var elementTop = el.getBoundingClientRect().top;
    var revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('revealed');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
