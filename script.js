const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const form = document.querySelector("#contact-form");
const message = document.querySelector("#form-message");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const name = document.querySelector("#name").value.trim();
  message.textContent = `Thanks, ${name}! Your demo message is ready. This form does not send email.`;
  form.reset();
});
