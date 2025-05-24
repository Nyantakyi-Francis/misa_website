function toggleAnswer(id) {
  const answer = document.getElementById(`answer${id}`);
  const toggle = event.currentTarget.querySelector('.faq-toggle');
  answer.classList.toggle('show');
  toggle.textContent = answer.classList.contains('show') ? '−' : '+';
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggleButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
