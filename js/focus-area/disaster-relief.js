let disasterImages = [];

let disasterIndex = 0;

let disasterInterval = null;

function initDisasterSlider() {

  const slider =
    document.getElementById("disasterSlider");

  if (!slider) return;

  disasterImages = [

    {
      image:
      "../images/focus-areas/disaster-relief/Screenshot-2025-06-19-at-4.04.52-AM.png",

      title:
      "Jammu & Kashmir Rain Disaster",

      description:
      "Emergency relief and rehabilitation support for affected communities."
    },

    {
      image:
      "../images/focus-areas/disaster-relief/Screenshot-2025-06-19-at-4.05.01-AM.png",

      title:
      "Nepal Earthquake",

      description:
      "Humanitarian assistance and disaster recovery support."
    },

    {
      image:
      "../images/focus-areas/disaster-relief/Screenshot-2025-06-19-at-4.05.10-AM.png",

      title:
      "Uttarakhand Rain Disaster",

      description:
      "Providing relief materials and community assistance."
    },

    {
      image:
      "../images/focus-areas/disaster-relief/Screenshot-2025-06-19-at-4.05.19-AM.png",

      title:
      "Bihar Flood",

      description:
      "Emergency food distribution and rehabilitation programmes."
    },

    {
      image:
      "../images/focus-areas/disaster-relief/Screenshot-2025-06-19-at-4.05.28-AM.png",

      title:
      "Tamil Nadu Flood",

      description:
      "Supporting flood-affected families with essential supplies."
    },

    {
      image:
      "../images/focus-areas/disaster-relief/Screenshot-2025-06-19-at-4.05.39-AM.png",

      title:
      "Kutch, Gujarat Earthquake",

      description:
      "Long-term rehabilitation and community rebuilding initiatives."
    }

  ];

  const nextBtn =
    document.querySelector(".disaster-btn.next");

  const prevBtn =
    document.querySelector(".disaster-btn.prev");

  const title =
    document.getElementById("disasterTitle");

  const description =
    document.getElementById("disasterDescription");

  const counter =
    document.getElementById("disasterCounter");

  function updateImage() {

    slider.style.opacity = "0";

    setTimeout(() => {

      slider.src =
        disasterImages[disasterIndex].image;

      title.textContent =
        disasterImages[disasterIndex].title;

      description.textContent =
        disasterImages[disasterIndex].description;

      counter.textContent =
        `${String(disasterIndex + 1).padStart(2,"0")} / ${String(disasterImages.length).padStart(2,"0")}`;

      slider.style.opacity = "1";

    },300);

  }

  nextBtn.onclick = () => {

    disasterIndex++;

    if(disasterIndex >= disasterImages.length){
      disasterIndex = 0;
    }

    updateImage();

  };

  prevBtn.onclick = () => {

    disasterIndex--;

    if(disasterIndex < 0){
      disasterIndex =
        disasterImages.length - 1;
    }

    updateImage();

  };

  clearInterval(disasterInterval);

  disasterInterval = setInterval(() => {

    disasterIndex++;

    if(disasterIndex >= disasterImages.length){
      disasterIndex = 0;
    }

    updateImage();

  },5000);

  updateImage();
}