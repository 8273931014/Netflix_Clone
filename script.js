// ======================
// FAQ Accordion
// ======================

const faqBoxes = document.querySelectorAll(".faqbox");

faqBoxes.forEach((box) => {
    box.addEventListener("click", () => {

        faqBoxes.forEach((item) => {
            if (item !== box) {
                item.classList.remove("active");
            }
        });

        box.classList.toggle("active");
    });
});

// ======================
// Email Validation
// ======================

const emailInput = document.querySelector(".hero-buttons input");
const getStartedBtn = document.querySelector(".btn-red");

if (getStartedBtn && emailInput) {
    getStartedBtn.addEventListener("click", () => {

        const email = emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {
            alert(`Welcome ${email} 🎬`);
        } else {
            alert("Please enter a valid email address!");
        }
    });
}

// ======================
// Navbar Scroll Effect
// ======================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.9)";
        navbar.style.transition = "0.3s ease";
    } else {
        navbar.style.backgroundColor = "transparent";
    }

});

// ======================
// Scroll Reveal Animation
// ======================

const sections = document.querySelectorAll(".first");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach((section) => {
    observer.observe(section);
});

// ======================
// Hero Text Animation
// ======================

const heroTitle = document.querySelector(".hero span");

if (heroTitle) {

    const originalText = heroTitle.textContent;
    heroTitle.textContent = "";

    let index = 0;

    function typeWriter() {

        if (index < originalText.length) {
            heroTitle.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }

    }

    typeWriter();
}

// ======================
// Smooth Button Hover
// ======================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.transition = "0.3s";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });

});

// ======================
// Current Year in Footer
// ======================

const footer = document.querySelector("footer");

if (footer) {

    const year = document.createElement("p");

    year.style.marginTop = "30px";
    year.style.textAlign = "center";
    year.style.color = "gray";

    year.innerHTML = `© ${new Date().getFullYear()} Netflix Clone by Mehul`;

    footer.appendChild(year);
}