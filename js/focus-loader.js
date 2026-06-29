document.addEventListener("DOMContentLoaded", () => {
  const BASE_PATH = window.location.hostname.includes("github.io")
    ? "/phdfwf-website"
    : "";

  const navLinks = document.querySelectorAll(".about-nav-link");

  const dynamicContent = document.getElementById("dynamic-focus-content");

  if (!dynamicContent) {
    console.error("dynamic-focus-content not found!");
    return;
  }

  const pageMap = {
    "healthcare-community": "./focus-area/healthcare-community.html",

    "education-skill": "./focus-area/education-skill.html",

    "disaster-relief": "./focus-area/disaster-relief.html",

    "water-events": "./focus-area/water-events.html",
  };

  async function loadPage(page) {
    try {
      const response = await fetch(pageMap[page]);

      if (!response.ok) {
        throw new Error(`Failed to load ${page}`);
      }

      const html = await response.text();

      dynamicContent.innerHTML = html;

      console.log("BASE_PATH =", BASE_PATH);

      console.log("HOST =", window.location.hostname);

      /* Fix all dynamic images */

      dynamicContent.querySelectorAll("img[data-src]").forEach((img) => {
        const path = img.dataset.src;

        img.src = BASE_PATH ? `${BASE_PATH}/${path}` : path;

        console.log("Loaded Image:", img.src);
      });

      setTimeout(() => {
        if (typeof initHealthcareSlider === "function") {
          const healthcare = document.getElementById("healthcareSlider");

          if (healthcare) {
            initHealthcareSlider();
          }
        }

        if (typeof initEducationSlider === "function") {
          const education = document.getElementById("educationSlider");

          if (education) {
            initEducationSlider();
          }
        }

        if (typeof initEducationMainSlider === "function") {
          const educationMain = document.getElementById("educationMainSlider");

          if (educationMain) {
            initEducationMainSlider();
          }
        }

        if (typeof initCertificateSlider === "function") {
          const certificate = document.getElementById("certificateSlider");

          if (certificate) {
            initCertificateSlider();
          }
        }
        if (typeof initCovidSlider === "function") {
          const covid = document.getElementById("covidSlider");

          if (covid) {
            initCovidSlider();
          }
        }
        if (typeof initResourceSlider === "function") {
          const resource = document.getElementById("resourceSlider");

          if (resource) {
            initResourceSlider();
          }
        }

        if (typeof initDisasterSlider === "function") {
          const disaster = document.getElementById("disasterSlider");

          if (disaster) {
            initDisasterSlider();
          }
        }

        if (typeof initInternationalSlider === "function") {
          const international = document.getElementById("internationalSlider");

          if (international) {
            initInternationalSlider();
          }
        }

        if (typeof initWomenChildSlider === "function") {
          const womenChild = document.getElementById("womenChildSlider");

          if (womenChild) {
            initWomenChildSlider();
          }
        }

        console.log("Page Loaded:", page);
      }, 100);

      window.scrollTo({
        top: 0,

        behavior: "smooth",
      });
    } catch (error) {
      console.error(error);

      dynamicContent.innerHTML = `

        <div class="content-error">

          <h2>
            Content Unavailable
          </h2>

          <p>
            Unable to load this section right now.
          </p>

        </div>

      `;
    }
  }

  loadPage("healthcare-community");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const page = link.dataset.page;

      navLinks.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");

      loadPage(page);
    });
  });
});
