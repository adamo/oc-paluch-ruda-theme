console.log(
  "%c This site has been created by DEPCORE | depcore.pl ",
  "background: #ffe400; color: #121212; padding: 30px 20px"
);
import Headroom from "headroom.js";
import Swup from "swup";
import SwupScrollPlugin from "@swup/scroll-plugin";
import SwupBodyClassPlugin from "@swup/body-class-plugin";

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

    let mc = document.getElementById("open-popup");

    if (mc) {
      mc.addEventListener("click", showPopup);
    }
  });

  document.addEventListener("swup:transitionEnd", function (event) {
    document.getElementById("trans-title").innerHTML = "";
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
    initSwup();
    initAll();
  }, delayTimer);
});
