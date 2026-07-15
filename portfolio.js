const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelector('.logo');
const section = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    section.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active')
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                section[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLinks.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active')
        setTimeout(() => {
            section[0].classList.add('active');
        }, 1100);
    }

});


const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        const resumeDetails = document.querySelectorAll(".resume-detail");

        resumeBtns.forEach(btn => btn.classList.remove("active"));
        btn.classList.add("active");

        resumeDetails.forEach(detail => detail.classList.remove("active"));
        resumeDetails[idx].classList.add("active");
    });
});

// ================= Portfolio Slider =================

const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");

const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
const portfolioDetails = document.querySelectorAll(".portfolio-detail");
const totalSlides = document.querySelectorAll(".portfolio-carousel .img-item").length;

let index = 0;

function updatePortfolio() {

    imgSlide.style.transform =
        `translateX(calc(-${index * 100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove("active");
    });

    portfolioDetails[index].classList.add("active");

    arrowLeft.classList.toggle("disabled", index === 0);
    arrowRight.classList.toggle("disabled", index === totalSlides - 1);
}

arrowRight.addEventListener("click", () => {
    if (index < totalSlides - 1) {
        index++;
        updatePortfolio();
    }
});

arrowLeft.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updatePortfolio();
    }
});

updatePortfolio();