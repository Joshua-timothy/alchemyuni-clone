"use strict";

const bar = document.querySelector(".bar");
const navbar = document.querySelector(".navbar");
const courseHeading = document.querySelectorAll(".course-hd");
const courseCon = document.querySelectorAll(".course-con");

bar.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < courseHeading.length; i++) {
  courseHeading[i].addEventListener("click", function () {
    this.classList.toggle("active");
    courseCon[i].classList.toggle("active");
  });
}
