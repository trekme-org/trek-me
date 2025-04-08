
// script.js

// Animate elements on scroll using Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, {
  threshold: 0.1
});

// Observe all sections
document.querySelectorAll("section, .gallery img, .gallery iframe").forEach(el => {
  observer.observe(el);
});

// Smooth scroll for internal links (if any added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Optional: scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = "↑ Top";
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.borderRadius = '30px';
scrollBtn.style.border = 'none';
scrollBtn.style.backgroundColor = '#0c3c2d';
scrollBtn.style.color = '#fff';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '1000';
scrollBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
