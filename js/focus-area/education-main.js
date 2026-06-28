let educationMainImages = [];

let educationMainIndex = 0;

let educationMainInterval = null;

function initEducationMainSlider() {
  const slider = document.getElementById("educationMainSlider");

  if (!slider) return;

  educationMainImages = [
    {
      image:
        "../images/focus-areas/education/Screenshot-2026-05-27-at-11.06.13-AM.png",

      title: "Computer Education",

      description:
        "Digital literacy and computer education programmes for youth and students.",
    },

    {
      image:
        "../images/focus-areas/education/Screenshot-2026-05-27-at-11.06.27-AM.png",

      title: "Tailoring & Embroidery",

      description:
        "Women empowerment through tailoring, embroidery and vocational training.",
    },

    {
      image:
        "../images/focus-areas/education/Screenshot-2026-05-27-at-11.06.43-AM.png",

      title: "Beauty Culture Training",

      description:
        "Professional beauty culture courses helping women become self-reliant.",
    },

    {
      image:
        "../images/focus-areas/education/Screenshot-2026-05-27-at-11.06.49-AM.png",

      title: "Mobile Repairing",

      description:
        "Technical skill development programmes in mobile repairing and servicing.",
    },

    {
      image:
        "../images/focus-areas/education/Screenshot-2026-05-27-at-11.06.57-AM.png",

      title: "Retail Management",

      description:
        "Industry-oriented retail management training for employment opportunities.",
    },

    {
      image:
        "../images/focus-areas/education/Screenshot-2026-05-27-at-11.07.03-AM.png",

      title: "Nursing Assistance",

      description:
        "Healthcare support training creating employment opportunities in healthcare.",
    },

    {
      image:
        "../images/focus-areas/education/Screenshot-2026-05-27-at-11.07.13-AM.png",

      title: "Self Defence & Life Skills",

      description:
        "Building confidence, safety awareness and leadership skills among youth.",
    },
  ];

  console.log(educationMainImages);
  console.log(educationMainImages.length);

  const nextBtn = document.querySelector(".education-gallery-btn.next");

  const prevBtn = document.querySelector(".education-gallery-btn.prev");

  const title = document.getElementById("educationMainTitle");

  const description = document.getElementById("educationMainDescription");

  const counter = document.getElementById("educationMainCounter");

  function updateImage() {
    slider.style.opacity = "0";

    setTimeout(() => {
      slider.src = educationMainImages[educationMainIndex].image;

      title.textContent = educationMainImages[educationMainIndex].title;

      description.textContent =
        educationMainImages[educationMainIndex].description;

      counter.textContent = `${String(educationMainIndex + 1).padStart(
        2,
        "0",
      )} / ${String(educationMainImages.length).padStart(2, "0")}`;

      slider.style.opacity = "1";
    }, 300);
  }

  nextBtn.onclick = () => {
    educationMainIndex++;

    if (educationMainIndex >= educationMainImages.length) {
      educationMainIndex = 0;
    }

    updateImage();
  };

  prevBtn.onclick = () => {
    educationMainIndex--;

    if (educationMainIndex < 0) {
      educationMainIndex = educationMainImages.length - 1;
    }

    updateImage();
  };

  clearInterval(educationMainInterval);

  educationMainInterval = setInterval(() => {
    educationMainIndex++;

    if (educationMainIndex >= educationMainImages.length) {
      educationMainIndex = 0;
    }

    updateImage();
  }, 5000);

  updateImage();
}
