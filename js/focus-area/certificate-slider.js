let certificateImages = [];

let certificateIndex = 0;

let certificateInterval = null;

function initCertificateSlider() {

    const slider =
        document.getElementById("certificateSlider");

    if (!slider) return;

    certificateImages = [

        {
            image:
            "../images/focus-areas/certificate-distribution/Screenshot-2025-06-18-at-9.54.17-PM.png",

            title:
            "Meethapur Skill Development Centre",

            description:
            "Certificate distribution ceremony recognising successful trainees."
        },

        {
            image:
            "../images/focus-areas/certificate-distribution/Screenshot-2025-06-18-at-9.54.26-PM.png",

            title:
            "Pochanpur Skill Development Centre",

            description:
            "Celebrating the successful completion of vocational training programmes."
        },

        {
            image:
            "../images/focus-areas/certificate-distribution/Screenshot-2025-06-18-at-9.54.37-PM.png",

            title:
            "SMPF Skill Development Centre, Dwarkapuri",

            description:
            "Awarding certificates to trainees completing skill development courses."
        },

        {
            image:
            "../images/focus-areas/certificate-distribution/Screenshot-2025-06-18-at-9.54.56-PM.png",

            title:
            "Jaquar Skill Development Centre, Assam",

            description:
            "Recognising achievement and empowering beneficiaries through certification."
        },

        {
            image:
            "../images/focus-areas/certificate-distribution/Screenshot-2025-06-18-at-9.55.04-PM.png",

            title:
            "WRG Skill Development Centre, Mehrauli",

            description:
            "Encouraging professional growth through skill certification."
        },

        {
            image:
            "../images/focus-areas/certificate-distribution/Screenshot-2025-06-18-at-9.55.11-PM.png",

            title:
            "Odisha Skill Development Centres",

            description:
            "Certificate distribution programme celebrating learner success."
        }

    ];

    const nextBtn =
        document.querySelector(".certificate-btn.next");

    const prevBtn =
        document.querySelector(".certificate-btn.prev");

    const title =
        document.getElementById("certificateTitle");

    const description =
        document.getElementById("certificateDescription");

    const counter =
        document.getElementById("certificateCounter");

    function updateImage() {

        slider.style.opacity = "0";

        setTimeout(() => {

            slider.src =
                certificateImages[certificateIndex].image;

            title.textContent =
                certificateImages[certificateIndex].title;

            description.textContent =
                certificateImages[certificateIndex].description;

            counter.textContent =
                `${String(certificateIndex + 1).padStart(2,"0")} / ${String(certificateImages.length).padStart(2,"0")}`;

            slider.style.opacity = "1";

        },300);
    }

    nextBtn.onclick = () => {

        certificateIndex++;

        if(certificateIndex >= certificateImages.length){
            certificateIndex = 0;
        }

        updateImage();
    };

    prevBtn.onclick = () => {

        certificateIndex--;

        if(certificateIndex < 0){
            certificateIndex = certificateImages.length - 1;
        }

        updateImage();
    };

    clearInterval(certificateInterval);

    certificateInterval = setInterval(() => {

        certificateIndex++;

        if(certificateIndex >= certificateImages.length){
            certificateIndex = 0;
        }

        updateImage();

    },5000);

    updateImage();
}