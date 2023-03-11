"use strict";

const bar = document.querySelector(".bar");
const navbar = document.querySelector(".navbar");
const courseHeading = document.querySelectorAll(".course-hd");
const courseCon = document.querySelectorAll(".course-con");

bar.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});
z;

for (let i = 0; i < courseHeading.length; i++) {
  courseHeading[i].addEventListener("click", function () {
    this.classList.toggle("active");
    courseCon[i].classList.toggle("active");
  });
}

/* console.log(courseCon);

for (let i = 0; i < courseCon.length; i++) {
  courseCon.style.backgroundColor = "#000";
} */

/* font-family: 'Roquefort Trial', sans-serif;
 @import url('https://fonts.cdnfonts.com/css/roquefort-trial');
</style>
                

*/

// The witcher seasom 3
// manifest
// queen charlotte
// the menu
// she hulk
//  duegeon -->
//  tiger's tail -->
