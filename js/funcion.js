// ===== FORMULARIO =====
var contactForm = document.getElementById('contactForm');
var formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Validacion simple
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();

    if (!nombre || !email || !telefono) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }
    // Show success message
    contactForm.style.display = 'none';
    formSuccess.classList.add('show');
    // Reset after 4 seconds
    setTimeout(function () {
      contactForm.reset();
      contactForm.style.display = 'block';
      formSuccess.classList.remove('show');
    }, 4000);
  });
}
