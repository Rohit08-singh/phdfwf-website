let resourceImages = [];

let resourceIndex = 0;

let resourceInterval = null;

function initResourceSlider() {

  const slider =
    document.getElementById("resourceSlider");

  if (!slider) return;

  resourceImages = [

    {
      image:
      "../images/focus-areas/resource-mobilization/Screenshot-2025-06-19-at-3.51.42-AM.png",

      title:
      "Musical Evenings",

      description:
      "Cultural programmes supporting community engagement."
    },

    {
      image:
      "../images/focus-areas/resource-mobilization/Screenshot-2025-06-19-at-3.51.55-AM.png",

      title:
      "Annual Carnival",

      description:
      "Community celebrations encouraging participation."
    },

    {
      image:
      "../images/focus-areas/resource-mobilization/Screenshot-2025-06-19-at-3.52.05-AM.png",

      title:
      "Theatre Shows",

      description:
      "Creative performances raising awareness and support."
    },

    {
      image:
      "../images/focus-areas/resource-mobilization/Screenshot-2025-06-19-at-3.52.14-AM.png",

      title:
      "Workshops & Seminars",

      description:
      "Knowledge-sharing sessions and community interaction."
    }

  ];

  const nextBtn =
    document.querySelector(".resource-btn.next");

  const prevBtn =
    document.querySelector(".resource-btn.prev");

  const title =
    document.getElementById("resourceTitle");

  const description =
    document.getElementById("resourceDescription");

  const counter =
    document.getElementById("resourceCounter");

  function updateImage() {

    slider.style.opacity = "0";

    setTimeout(() => {

      slider.src =
        resourceImages[resourceIndex].image;

      title.textContent =
        resourceImages[resourceIndex].title;

      description.textContent =
        resourceImages[resourceIndex].description;

      counter.textContent =
        `${String(resourceIndex + 1).padStart(2,"0")} / ${String(resourceImages.length).padStart(2,"0")}`;

      slider.style.opacity = "1";

    },300);

  }

  nextBtn.onclick = () => {

    resourceIndex++;

    if(resourceIndex >= resourceImages.length){
      resourceIndex = 0;
    }

    updateImage();

  };

  prevBtn.onclick = () => {

    resourceIndex--;

    if(resourceIndex < 0){
      resourceIndex = resourceImages.length - 1;
    }

    updateImage();

  };

  clearInterval(resourceInterval);

  resourceInterval = setInterval(() => {

    resourceIndex++;

    if(resourceIndex >= resourceImages.length){
      resourceIndex = 0;
    }

    updateImage();

  },5000);

  updateImage();
}