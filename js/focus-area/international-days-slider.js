let internationalImages = [];

let internationalIndex = 0;

let internationalInterval = null;

function initInternationalSlider() {

  const slider =
    document.getElementById("internationalSlider");

  if (!slider) return;

  internationalImages = [

    {
      image:
      "../images/focus-areas/international-days/Screenshot-2025-06-17-at-6.15.35-AM.png",

      title:
      "International Yoga Day",

      description:
      "Promoting physical and mental well-being through yoga activities and awareness programmes."
    },

    {
      image:
      "../images/focus-areas/international-days/Screenshot-2025-06-17-at-6.15.44-AM.png",

      title:
      "World Environment Day",

      description:
      "Encouraging environmental conservation and sustainable community practices."
    },

    {
      image:
      "../images/focus-areas/international-days/Screenshot-2025-06-17-at-6.15.53-AM.png",

      title:
      "Swachh Bharat Abhiyan Day",

      description:
      "Promoting cleanliness, sanitation and community participation."
    },

    {
      image:
      "../images/focus-areas/international-days/Screenshot-2025-06-17-at-6.16.02-AM.png",

      title:
      "International Women's Day",

      description:
      "Celebrating women's achievements and promoting gender equality."
    },

    {
      image:
      "../images/focus-areas/international-days/Screenshot-2025-06-17-at-6.16.10-AM.png",

      title:
      "World AIDS Day",

      description:
      "Spreading awareness about HIV/AIDS prevention, treatment and care."
    },

    {
      image:
      "../images/focus-areas/international-days/Screenshot-2025-06-18-at-10.20.05-PM.png",

      title:
      "Republic Day",

      description:
      "Celebrating national pride, unity and community participation."
    },

    {
      image:
      "../images/focus-areas/international-days/Screenshot-2025-06-18-at-10.20.13-PM.png",

      title:
      "World Menstrual Hygiene Day",

      description:
      "Creating awareness about menstrual health and hygiene practices."
    },

    {
      image:
      "../images/focus-areas/international-days/Screenshot-2025-06-18-at-10.20.50-PM.png",

      title:
      "Earth Day",

      description:
      "Promoting environmental responsibility and sustainable living."
    }

  ];

  const nextBtn =
    document.querySelector(".international-btn.next");

  const prevBtn =
    document.querySelector(".international-btn.prev");

  const title =
    document.getElementById("internationalTitle");

  const description =
    document.getElementById("internationalDescription");

  const counter =
    document.getElementById("internationalCounter");

  function updateImage() {

    slider.style.opacity = "0";

    setTimeout(() => {

      slider.src =
        internationalImages[internationalIndex].image;

      title.textContent =
        internationalImages[internationalIndex].title;

      description.textContent =
        internationalImages[internationalIndex].description;

      counter.textContent =
        `${String(internationalIndex + 1).padStart(2, "0")} / ${String(internationalImages.length).padStart(2, "0")}`;

      slider.style.opacity = "1";

    }, 300);

  }

  nextBtn.onclick = () => {

    internationalIndex++;

    if (internationalIndex >= internationalImages.length) {
      internationalIndex = 0;
    }

    updateImage();

  };

  prevBtn.onclick = () => {

    internationalIndex--;

    if (internationalIndex < 0) {
      internationalIndex =
        internationalImages.length - 1;
    }

    updateImage();

  };

  clearInterval(internationalInterval);

  internationalInterval = setInterval(() => {

    internationalIndex++;

    if (internationalIndex >= internationalImages.length) {
      internationalIndex = 0;
    }

    updateImage();

  }, 5000);

  updateImage();

}