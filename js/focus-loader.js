document.addEventListener("DOMContentLoaded", () => {
  // GitHub Pages vs Localhost support
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

        console.log("Page Loaded:", page);
      }, 100);

      dynamicContent.querySelectorAll("img[data-src]").forEach((img) => {
        const path = img.dataset.src;

        img.src = BASE_PATH ? `${BASE_PATH}/${path}` : `/${path}`;
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(error);

      dynamicContent.innerHTML = `
      <div class="content-error">
        <h2>Content Unavailable</h2>
        <p>
          Unable to load this section right now.
        </p>
      </div>
    `;
    }
  }

  // Default page
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
