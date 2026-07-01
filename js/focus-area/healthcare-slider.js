let healthcareImages = [];

let currentIndex = 0;

let healthcareInterval = null;

function initHealthcareSlider() {
  const slider = document.getElementById("healthcareSlider");

  if (!slider) {
    console.log("Slider not found");

    return;
  }

  healthcareImages = [
    {
      image:
        "../images/focus-areas/healthcare/Screenshot-2025-06-16-at-6.56.56-PM.png",
      title: "Target Intervention Project on HIV/AIDS",
      description:
        "Volunteer doctors providing healthcare consultations and basic treatment.",
    },

    {
      image:
        "../images/focus-areas/healthcare/Screenshot-2025-06-16-at-6.57.10-PM.png",
      title: "PHDFWF-SMPF Mobile Medical Van",
      description:
        "Educating families on preventive healthcare and healthy lifestyle practices.",
    },

    {
      image:
        "../images/focus-areas/healthcare/Screenshot-2025-06-16-at-6.57.22-PM.png",
      title: "PHDFWF- Jaquar Foundation Mobile Medical Van (Gurugram, Haryana)",
      description:
        "Extending medical support to underserved communities through outreach initiatives.",
    },

    {
      image:
        "../images/focus-areas/healthcare/Screenshot-2025-06-16-at-6.57.34-PM.png",
      title: "PHDFWF- Jaquar Foundation Dental and Eye Mobile Van",
      description:
        "Special healthcare services focused on maternal and child wellbeing.",
    },

    {
      image:
        "../images/focus-areas/healthcare/Screenshot-2025-06-16-at-6.57.55-PM.png",
      title: "PHDFWF- Jaquar Foundation Mobile Medical Van (Kharoi, Gujarat)",
      description:
        "Healthcare services reaching remote areas through mobile medical units.",
    },

    {
      image:
        "../images/focus-areas/healthcare/Screenshot-2025-06-16-at-6.58.55-PM.png",
      title: "PHDFWF-AAOT Mobile Medical Van",
      description:
        "Healthcare services reaching remote areas through mobile medical units.",
    },

    {
      image:
        "../images/focus-areas/healthcare/Screenshot-2025-06-16-at-6.58.45-PM.png",
      title:
        "PHDFWF-AAOT Mobile Medical VaNew Zealand High Commission -Healthcare Projects(General and Eye Dental Health Check-up Camps)",
      description:
        "Healthcare services reaching remote areas through mobile medical units.",
    },

        {
      image:
        "../images/focus-areas/healthcare/Screenshot-2025-06-16-at-6.58.25-PM.png",
      title:
        "PHDFW-Jaquar- Mobile Medical Van, Delhi NCR",
      description:
        "Healthcare services reaching remote areas through mobile medical units.",
    },

  ];

  const nextBtn = document.querySelector(".gallery-btn.next");

  const prevBtn = document.querySelector(".gallery-btn.prev");

  const title = document.getElementById("galleryTitle");

  const description = document.getElementById("galleryDescription");

  const counter = document.getElementById("galleryCounter");

  const dots = document.querySelectorAll(".gallery-dots span");

  function updateImage() {
    slider.style.opacity = "0";

    setTimeout(() => {
      slider.src = healthcareImages[currentIndex].image;

      title.textContent = healthcareImages[currentIndex].title;

      description.textContent = healthcareImages[currentIndex].description;

      counter.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(healthcareImages.length).padStart(2, "0")}`;

      dots.forEach((dot) => dot.classList.remove("active"));

      if (dots[currentIndex]) {
        dots[currentIndex].classList.add("active");
      }

      slider.style.opacity = "1";
    }, 300);
  }

  nextBtn.onclick = () => {
    currentIndex++;

    if (currentIndex >= healthcareImages.length) {
      currentIndex = 0;
    }

    updateImage();
  };

  prevBtn.onclick = () => {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = healthcareImages.length - 1;
    }

    updateImage();
  };

  clearInterval(healthcareInterval);

  healthcareInterval = setInterval(() => {
    currentIndex++;

    if (currentIndex >= healthcareImages.length) {
      currentIndex = 0;
    }

    updateImage();
  }, 5000);

  updateImage();
}
