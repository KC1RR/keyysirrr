// custom cursor (keep if you have it)
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  }
});


// 🔥 scroll reveal system
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));