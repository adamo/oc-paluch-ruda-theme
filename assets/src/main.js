console.log(
  "%c This site has been created by DEPCORE | depcore.pl ",
  "background: #ffe400; color: #121212; padding: 30px 20px"
);
import Headroom from "headroom.js";
import Swup from "swup";
import SwupScrollPlugin from "@swup/scroll-plugin";
import SwupBodyClassPlugin from "@swup/body-class-plugin";
import { gsap } from "gsap";

import { initPopups, closePopupInit } from "./init-popups";
import { initAccordeon } from "./init-accordeon";
import { initAnmiations } from "./animations";

const menuToggle = document.querySelector(".menu-toggle");
const siteHeader = document.getElementById("masthead");

let headroom = new Headroom(document.querySelector("header.site-header"));
headroom.init();

const domReady = function (callback) {
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
};

let delayTimer = 1000;

function initAll() {
  initPopups();
  closePopupInit();
  initAccordeon();
  initAnmiations();
}

function initSwup() {
  new Swup({
    containers: [".page-content", ".main-navigation", ".hero"],
    plugins: [new SwupScrollPlugin(), new SwupBodyClassPlugin()],
  });

  document.addEventListener("swup:transitionStart", function (event) {
    document.getElementById("masthead").classList.remove("toggled");
    document.body.classList.remove("toggled", "map-open");
  });

  document.addEventListener("swup:contentReplaced", function (event) {
    initAll();
  });
}

domReady(function () {
  menuToggle.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("toggled");
    return siteHeader.classList.toggle("toggled");
  });

  document.querySelector(".core_loader").classList.remove("-show");
  setTimeout(function () {
    document.querySelector(".core_loader").classList.remove("-front");
    
    document.querySelectorAll('.hero-illustration-title').forEach((el,i)=>{
      let animation = gsap.fromTo(el, {opacity: 0, translateY:-15}, {opacity: 1, translateY:0, duration: 1, ease: "Power2.easeOut" });
      animation.delay(i*0.1)
    })
    
    initSwup();
    initAll();
  }, delayTimer);
});