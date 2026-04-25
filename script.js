function showMessage() {
  alert("Your SEO Content Cluster Project is ready!");
}

// Smooth scroll for buttons and links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Fade-in effect for cards when page loads
window.addEventListener("load", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 150);
  });
});

// Change button text after click
const button = document.querySelector(".btn");

if (button) {
  button.addEventListener("click", function () {
    button.innerText = "Project Opened";
  });
}
