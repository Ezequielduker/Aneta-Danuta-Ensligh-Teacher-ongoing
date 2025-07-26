// Menu toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

// Scroll fade-in animation
const fadeEls = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});
fadeEls.forEach(el => observer.observe(el));

// Countdown timer
const timerElement = document.getElementById("timer");
const targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 3); // 3h from now

function updateTimer() {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) {
    timerElement.textContent = "00:00:00";
    return;
  }
  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
  timerElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTimer, 1000);
updateTimer();
// Profile Carousel
const profileTrack = document.querySelector(".profile-carousel-track");
const profilePrevBtn = document.querySelector(".profiles-section .carousel-btn.prev");
const profileNextBtn = document.querySelector(".profiles-section .carousel-btn.next");

let profileIndex = 0;
const profileSlides = document.querySelectorAll(".profile-card");
const totalProfiles = profileSlides.length;

function updateProfileCarousel() {
  const offset = -profileIndex * 100;
  profileTrack.style.transform = `translateX(${offset}%)`;
}

profilePrevBtn.addEventListener("click", () => {
  profileIndex = (profileIndex - 1 + totalProfiles) % totalProfiles;
  updateProfileCarousel();
});

profileNextBtn.addEventListener("click", () => {
  profileIndex = (profileIndex + 1) % totalProfiles;
  updateProfileCarousel();
});

// Optional autoplay
setInterval(() => {
  profileIndex = (profileIndex + 1) % totalProfiles;
  updateProfileCarousel();
}, 8000);

