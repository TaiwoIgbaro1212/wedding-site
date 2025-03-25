// 1. Select all slides
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// 2. Function to show a specific slide
function showSlide(index) {
  // Remove 'active' from all slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  // Add 'active' to the current slide
  slides[index].classList.add("active");
}

// 3. Function to go to the next slide
function nextSlide() {
  currentSlide++;
  // If we reach the last slide, loop back to the start
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// 4. Initialize the first slide
showSlide(currentSlide);

// 5. Automatically move to the next slide every 5 seconds
setInterval(nextSlide, 2000);

// Select all accordion buttons
const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Get the parent .accordion-item
    const accordionItem = this.parentElement;

    // Close any open accordion if you want only one open at a time:
    // (Optional) comment this block if you want multiple items open
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active");
      }
    });

    // Toggle the current accordion
    accordionItem.classList.toggle("active");
  });
});



// 1. Set the target date (e.g., March 29, 2025)
const weddingDate = new Date("October 25, 2025 00:00:00").getTime();

// 2. Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // If countdown is finished
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("months").innerText = "00";
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    return;
  }

  // Calculate months, days, hours, minutes, seconds
  // This is approximate because months vary in length;
  // We'll assume ~30.4375 days per month for demonstration.
  const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.4375));
  const days = Math.floor(
    (distance % (1000 * 60 * 60 * 24 * 30.4375)) /
      (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
      (1000 * 60)
  );
  const seconds = Math.floor(
    (distance % (1000 * 60)) /
      1000
  );

  // Display results
  document.getElementById("months").innerText = String(months).padStart(2, '0');
  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}, 1000);
