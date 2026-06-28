let educationImages = [];

let educationIndex = 0;

let educationInterval = null;

function initEducationSlider() {
  const slider = document.getElementById("educationSlider");

  if (!slider) return;

  educationImages = [
    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-06-19-at-4.35.08-AM.png",

      title: "Skill Development Centre",

      description:
        "Vocational and skill development programmes empowering youth and women.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-194241-1024x337.png",

      title: "Computer Education",

      description:
        "Digital literacy and computer education training for students and youth.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.10.53-PM.png",

      title: "Tailoring & Embroidery",

      description:
        "Women empowerment through tailoring, embroidery and vocational skills.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.11.00-PM.png",

      title: "Beauty Culture",

      description:
        "Professional beauty culture training creating self-employment opportunities.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.11.08-PM.png",

      title: "Mobile Repairing",

      description:
        "Technical training programmes in mobile repairing and maintenance.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.11.16-PM.png",

      title: "Retail Management",

      description:
        "Industry-oriented retail management and customer service training.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.11.23-PM.png",

      title: "Nursing Assistance",

      description:
        "Healthcare support training preparing candidates for caregiving roles.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.11.52-PM.png",

      title: "Hand Weaving & Knitting",

      description:
        "Traditional craft development programmes promoting sustainable livelihoods.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.11.59-PM.png",

      title: "Self Defence Training",

      description:
        "Building confidence, safety awareness and leadership among youth.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.12.06-PM.png",

      title: "Cooking & Food Skills",

      description:
        "Practical culinary training supporting entrepreneurship and employment.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.12.14-PM.png",

      title: "Electrician Training",

      description:
        "Technical electrician skill development for employment opportunities.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.12.21-PM.png",

      title: "Digital Media",

      description:
        "Training in modern digital tools, communication and media technologies.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.12.28-PM.png",

      title: "Local Craft Development",

      description:
        "Preserving traditional crafts while creating livelihood opportunities.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.12.37-PM-1.png",

      title: "Vocational Skills Programme",

      description:
        "Comprehensive vocational education for sustainable careers.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.12.45-PM.png",

      title: "Entrepreneurship Development",

      description: "Encouraging self-employment and small business creation.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.12.53-PM.png",

      title: "Women Skill Training",

      description:
        "Specialized programmes focused on economic empowerment of women.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.13.00-PM.png",

      title: "Career Development",

      description:
        "Career-oriented training programmes enhancing employability.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.13.07-PM.png",

      title: "Employment Readiness",

      description: "Developing practical workplace and professional skills.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.13.36-PM.png",

      title: "Community Skill Centre",

      description:
        "Community-based training programmes reaching underserved groups.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.13.44-PM.png",

      title: "Vocational Excellence",

      description:
        "Providing quality vocational education and capacity building.",
    },

    {
      image:
        "../images/focus-areas/skill-development/Screenshot-2025-07-17-at-5.13.53-PM.png",

      title: "Future Skills Programme",

      description:
        "Preparing participants with practical skills for future opportunities.",
    },
  ];

  const nextBtn = document.querySelector(".skill-gallery-btn.next");
  const prevBtn = document.querySelector(".skill-gallery-btn.prev");
  const title = document.getElementById("educationTitle");

  const description = document.getElementById("educationDescription");

  const counter = document.getElementById("educationCounter");

  function updateImage() {
    slider.style.opacity = "0";

    setTimeout(() => {
      slider.src = educationImages[educationIndex].image;

      title.textContent = educationImages[educationIndex].title;

      description.textContent = educationImages[educationIndex].description;

      counter.textContent = `${String(educationIndex + 1).padStart(
        2,
        "0",
      )} / ${String(educationImages.length).padStart(2, "0")}`;

      // if (dots[educationIndex]) {
      //   dots[educationIndex].classList.add("active");
      // }

      slider.style.opacity = "1";
    }, 300);
  }

  nextBtn.onclick = () => {
    educationIndex++;

    if (educationIndex >= educationImages.length) {
      educationIndex = 0;
    }

    updateImage();
  };

  prevBtn.onclick = () => {
    educationIndex--;

    if (educationIndex < 0) {
      educationIndex = educationImages.length - 1;
    }

    updateImage();
  };

  clearInterval(educationInterval);

  educationInterval = setInterval(() => {
    educationIndex++;

    if (educationIndex >= educationImages.length) {
      educationIndex = 0;
    }

    updateImage();
  }, 5000);

  updateImage();
}
