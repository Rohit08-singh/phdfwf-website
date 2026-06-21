document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".about-nav-link");

  const overviewContent = document.getElementById("about-overview-content");

  const dynamicContent = document.getElementById("dynamic-about-content");

  const pageMap = {
    "organisational-briefing": "./about/organisational-briefing.html",
    "registration-details": "./about/registration-details.html",
    "geographical-area": "./about/geographical-area.html",
    "trustees-board": "./about/trustees-board.html",
    partners: "./about/partners.html",
    awards: "./about/awards.html",
    "success-stories": "./about/success-stories.html",
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();

      const page = link.dataset.page;

      navLinks.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");

      if (page === "about") {
        dynamicContent.innerHTML = "";

        overviewContent.style.display = "block";

        return;
      }

      try {
        const response = await fetch(pageMap[page]);

        if (!response.ok) {
          throw new Error("Failed to load content");
        }

        const html = await response.text();
        overviewContent.style.display = "none";

        dynamicContent.innerHTML = html;

        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 50);
      } catch (error) {
        dynamicContent.innerHTML = `
                    <div class="content-error">
                        <h2>Content Unavailable</h2>
                        <p>Unable to load this section right now.</p>
                    </div>
                `;

        console.error(error);
      }
    });
  });
});
