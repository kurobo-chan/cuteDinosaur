"use strict";
function navFunc() {
  document.querySelector("html").classList.toggle("open");
  document.querySelector(".navBtn").classList.toggle("is-active");
}
function accFunc() {
  document.querySelector(".accordion").classList.toggle("accOpen");
}

window.onscroll = function () {
  topFunc();
};
function topFunc() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector(".header").classList.add("fixed");
  } else {
    document.querySelector(".header").classList.remove("fixed");
  }
}
