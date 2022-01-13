const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".nav");
const header = document.querySelector("header");
const topHeader = document.querySelector(".header-area .top-header");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("change");
  navBar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  menuBtn.classList.remove("change");
  navBar.classList.remove("active");
  if (scrollY > 600) {
    header.classList.add("sticky");
    topHeader.style.display = "none";
  } else {
    header.classList.remove("sticky");
    topHeader.style.display = "block";
  }
});

// Tab selectors
const tabButtons = document.querySelectorAll(".buttons");
const tabPannel = document.querySelectorAll(".tab-pannel");
//  Show tab pannel function
const showTabPannel = (index, colorCode) => {
  tabButtons.forEach((btn) => {
    btn.style.backgroundColor = "";
  });
  tabButtons[index].style.backgroundColor = colorCode;
  tabPannel.forEach((tab) => {
    tab.style.display = "none";
  });
  tabPannel[index].style.display = "flex";
};
showTabPannel(0, "#fff");
//  banner slider function
var swiper = new Swiper(".banner-area", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
// testimonial slider function
var swiper = new Swiper(".testimonial-area", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Doctor slide function
var swiper = new Swiper(".doctor", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  },
});
