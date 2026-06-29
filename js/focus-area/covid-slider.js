let covidImages = [];

let covidIndex = 0;

let covidInterval = null;

function initCovidSlider() {
  const slider = document.getElementById("covidSlider");

  if (!slider) return;

  const BASE_PATH = window.location.hostname.includes("github.io")
    ? "/phdfwf-website"
    : "";

  covidImages = [
    {
      image: `${BASE_PATH}/images/focus-areas/covid/Screenshot-2025-06-17-at-6.15.35-AM (1).png`,
      title: "Oxygen Generation Plant",
      description: "Installation of oxygen generation plants for hospitals.",
    },

    {
      image: `${BASE_PATH}/images/focus-areas/covid/Screenshot-2025-06-17-at-6.15.35-AM (1).png`,
      title: "Dry Food Distribution",
      description: "Distribution of dry food packets to poor communities.",
    },

    {
      image: `${BASE_PATH}/images/focus-areas/covid/Screenshot-2025-06-17-at-6.15.53-AM.png`,
      title: "Monthly Ration Support",
      description: "Helping needy and helpless families during the pandemic.",
    },

    {
      image: `${BASE_PATH}/images/focus-areas/covid/Screenshot-2025-06-17-at-6.16.02-AM.png`,
      title: "COVID Awareness",
      description: "Awareness generation programmes on COVID precautions.",
    },

    {
      image: `${BASE_PATH}/images/focus-areas/covid/Screenshot-2025-06-17-at-6.16.10-AM.png`,
      title: "KN95 Mask Distribution",
      description: "Distribution of masks and sanitary pads.",
    },
  ];

  const nextBtn = document.querySelector(".covid-btn.next");

  const prevBtn = document.querySelector(".covid-btn.prev");

  const title = document.getElementById("covidTitle");

  const description = document.getElementById("covidDescription");

  const counter = document.getElementById("covidCounter");

  function updateImage() {
    slider.style.opacity = "0";

    setTimeout(() => {
      slider.src = covidImages[covidIndex].image;

      title.textContent = covidImages[covidIndex].title;

      description.textContent = covidImages[covidIndex].description;

      counter.textContent = `${String(covidIndex + 1).padStart(2, "0")} / ${String(covidImages.length).padStart(2, "0")}`;

      slider.style.opacity = "1";
      console.log("Covid Slider Found:", slider);

      console.log("Covid Images:", covidImages);

      console.log("Covid First Image:", covidImages[0].image);
    }, 300);
  }

  nextBtn.onclick = () => {
    covidIndex++;

    if (covidIndex >= covidImages.length) {
      covidIndex = 0;
    }

    updateImage();
  };

  prevBtn.onclick = () => {
    covidIndex--;

    if (covidIndex < 0) {
      covidIndex = covidImages.length - 1;
    }

    updateImage();
  };

  clearInterval(covidInterval);

  covidInterval = setInterval(() => {
    covidIndex++;

    if (covidIndex >= covidImages.length) {
      covidIndex = 0;
    }

    updateImage();
  }, 5000);

  updateImage();
}
