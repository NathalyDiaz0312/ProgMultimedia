/* ===== MODULO FORMULARIO ===== */

const ContactFormModule = (() => {

  const getFormData = form => ({
    nombre: form.querySelector("#nombre").value.trim(),
    email: form.querySelector("#email").value.trim(),
    telefono: form.querySelector("#telefono").value.trim()
  });

  const validate = ({ nombre, email, telefono }) =>
    nombre !== "" && email !== "" && telefono !== "";

  const showError = () =>
    alert("Por favor, completa todos los campos obligatorios.");

  const showSuccess = (form, successMessage) => {
    form.style.display = "none";
    successMessage.classList.add("show");
  };

  const resetAfterDelay = (form, successMessage, timeout) => {
    setTimeout(() => {
      form.reset();
      form.style.display = "block";
      successMessage.classList.remove("show");
    }, timeout);
  };

  const handleSubmit = (e, form, successMessage, timeout) => {
    e.preventDefault();

    const data = getFormData(form);

    if (!validate(data)) {
      showError();
      return;
    }

    showSuccess(form, successMessage);
    resetAfterDelay(form, successMessage, timeout);
  };

  const init = ({ formId, successId, timeout = 4000 }) => {
    const form = document.getElementById(formId);
    const successMessage = document.getElementById(successId);
    if (!form) return;

    form.addEventListener("submit", e =>
      handleSubmit(e, form, successMessage, timeout)
    );
  };

  return { init };

})();

document.addEventListener("DOMContentLoaded", () => {
  ContactFormModule.init({
    formId: "contactForm",
    successId: "formSuccess",
    timeout: 4000
  });
});
