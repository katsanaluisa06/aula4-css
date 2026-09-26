```javascript
/* =====================================
   KATSEYE WORLD - JAVASCRIPT
===================================== */


/* =========================
   MENU MOBILE
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


/* Fechar menu ao clicar em um link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================
   MODO ESCURO
========================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("katseye-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");

    if (darkMode) {

        themeBtn.textContent = "☀️";

        localStorage.setItem(
            "katseye-theme",
            "dark"
        );

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "katseye-theme",
            "light"
        );

    }

});


/* =========================
   PESQUISA DE INTEGRANTES
========================= */

const searchInput =
    document.getElementById("searchInput");

const cards =
    document.querySelectorAll(".card");

const searchMessage =
    document.getElementById("searchMessage");


searchInput.addEventListener("input", () => {

    const search =
        searchInput.value
        .toLowerCase()
        .trim();

    let found = 0;

    cards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        const text =
            card.innerText.toLowerCase();

        if (
            name.includes(search) ||
            text.includes(search)
        ) {

            card.style.display = "";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    if (search === "") {

        searchMessage.textContent = "";

    } else if (found === 0) {

        searchMessage.textContent =
            "Nenhuma integrante encontrada 💔";

    } else {

        searchMessage.textContent =
            `${found} resultado(s) encontrado(s)! 💗`;

    }

});


/* =========================
   MODAL DAS INTEGRANTES
========================= */

const memberModal =
    document.getElementById("memberModal");

const closeModal =
    document.getElementById("closeModal");

const modalName =
    document.getElementById("modalName");

const modalText =
    document.getElementById("modalText");

const modalIcon =
    document.getElementById("modalIcon");


const memberInformation = {

    Sophia: {
        icon: "🐱",
        text:
            "Sophia é uma das integrantes do KATSEYE. Ela é conhecida por sua presença de palco, carisma e talento vocal."
    },

    Lara: {
        icon: "🌸",
        text:
            "Lara é conhecida por sua voz marcante, talento artístico e presença de palco."
    },

    Daniela: {
        icon: "🦋",
        text:
            "Daniela se destaca especialmente por sua dança, performance e energia durante os shows."
    },

    Megan: {
        icon: "💎",
        text:
            "Megan é conhecida por sua versatilidade, energia e talento nas performances do grupo."
    },

    Manon: {
        icon: "✨",
        text:
            "Manon chama atenção por seu carisma, estilo e presença de palco."
    },

    Yoonchae: {
        icon: "🐰",
        text:
            "Yoonchae é uma integrante sul-coreana conhecida por seu talento vocal e na dança."
    }

};


document.querySelectorAll(".learn-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        const member =
            button.dataset.member;

        const data =
            memberInformation[member];

        modalName.textContent = member;

        modalIcon.textContent = data.icon;

        modalText.textContent = data.text;

        memberModal.classList.add("show");

    });

});


closeModal.addEventListener("click", () => {

    memberModal.classList.remove("show");

});


memberModal.addEventListener("click", event => {

    if (event.target === memberModal) {

        memberModal.classList.remove("show");

    }

});


/* =========================
   ESC PARA FECHAR MODAIS
========================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        memberModal.classList.remove("show");

        lightbox.classList.remove("show");

    }

});


/* =========================
   BIAS
========================= */

const biasCards =
    document.querySelectorAll(".bias-card");

const biasResult =
    document.getElementById("biasResult");


biasCards.forEach(card => {

    card.addEventListener("click", () => {

        biasCards.forEach(item => {

            item.classList.remove("selected");

        });

        card.classList.add("selected");

        const bias =
            card.dataset.bias;

        biasResult.textContent =
            `Sua bias é ${bias}! 💗✨`;

        localStorage.setItem(
            "katseye-bias",
            bias
        );

    });

});


/* Recuperar bias salva */

const savedBias =
    localStorage.getItem("katseye-bias");

if (savedBias) {

    biasCards.forEach(card => {

        if (card.dataset.bias === savedBias) {

            card.classList.add("selected");

            biasResult.textContent =
                `Sua bias é ${savedBias}! 💗✨`;

        }

    });

}


/* =========================
   GALERIA / LIGHTBOX
========================= */

const galleryImages =
    document.querySelectorAll(".gallery img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");


galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src =
            image.src;

        lightboxImage.alt =
            image.alt;

        lightbox.classList.add("show");

    });

});


closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});


lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

    }

});


/* =========================
   FORMULÁRIO
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    formMessage.textContent =
        `Obrigada pela mensagem, ${name}! 💗✨`;

    contactForm.reset();

});


/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   ANIMAÇÃO AO APARECER
========================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


document.querySelectorAll(
    ".card, .music-card, .album, .info-card"
).forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});


/* =========================
   CORAÇÕES FLUTUANTES
========================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.textContent =
        Math.random() > 0.5
            ? "♡"
            : "✦";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";

    heart.style.color =
        "#ff72b6";

    heart.style.pointerEvents =
        "none";

    heart.style.zIndex =
        "999";

    heart.style.opacity =
        "0.7";

    document.body.appendChild(heart);


    const duration =
        Math.random() * 4000 + 4000;


    heart.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 0
            },

            {
                transform:
                    `translateY(-110vh) rotate(360deg)`,
                opacity: 0.8
            }
        ],
        {
            duration: duration,
            easing: "linear"
        }
    );


    setTimeout(() => {

        heart.remove();

    }, duration);

}


setInterval(createHeart, 1200);
```
