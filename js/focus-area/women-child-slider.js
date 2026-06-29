let womenChildImages = [];

let womenChildIndex = 0;

let womenChildInterval = null;

function initWomenChildSlider() {

  const slider =
    document.getElementById("womenChildSlider");

  if (!slider) return;

  womenChildImages = [

    {
      image:
      "../images/focus-areas/women-child/Screenshot-2025-06-18-at-10.43.15-PM.png",

      title:
      "Astitva Samman",

      description:
      "Recognising exceptional achievements and contributions."
    },

    {
      image:
      "../images/focus-areas/women-child/Screenshot-2025-06-18-at-10.43.40-PM.png",

      title:
      "Junior Astitva Samman",

      description:
      "Encouraging young achievers and future leaders."
    },

    {
      image:
      "../images/focus-areas/women-child/Screenshot-2025-08-20-at-7.55.21-PM.png",

      title:
      "Women Leadership Programme",

      description:
      "Celebrating leadership and empowerment."
    },

    {
      image:
      "../images/focus-areas/women-child/Screenshot-2025-08-20-at-7.55.35-PM.png",

      title:
      "Out Of The Box Programme",

      description:
      "Promoting creativity and innovation."
    }

  ];

  const nextBtn =
    document.querySelector(".women-child-btn.next");

  const prevBtn =
    document.querySelector(".women-child-btn.prev");

  const title =
    document.getElementById("womenChildTitle");

  const description =
    document.getElementById("womenChildDescription");

  const counter =
    document.getElementById("womenChildCounter");

  function updateImage() {

    slider.style.opacity = "0";

    setTimeout(() => {

      slider.src =
        womenChildImages[womenChildIndex].image;

      title.textContent =
        womenChildImages[womenChildIndex].title;

      description.textContent =
        womenChildImages[womenChildIndex].description;

      counter.textContent =
        `${String(womenChildIndex + 1).padStart(2,"0")} / ${String(womenChildImages.length).padStart(2,"0")}`;

      slider.style.opacity = "1";

    },300);

  }

  nextBtn.onclick = () => {

    womenChildIndex++;

    if(womenChildIndex >= womenChildImages.length){
      womenChildIndex = 0;
    }

    updateImage();

  };

  prevBtn.onclick = () => {

    womenChildIndex--;

    if(womenChildIndex < 0){
      womenChildIndex =
      womenChildImages.length - 1;
    }

    updateImage();

  };

  clearInterval(womenChildInterval);

  womenChildInterval = setInterval(() => {

    womenChildIndex++;

    if(womenChildIndex >= womenChildImages.length){
      womenChildIndex = 0;
    }

    updateImage();

  },5000);

  updateImage();

}