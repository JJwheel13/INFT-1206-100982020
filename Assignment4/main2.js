/*
Author: Justin Wheeler (100982020)
Completion Date: 2025-04-04
Purpose: To demonstrate the fundamentals of Javascript
File: main2.js
*/

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const altImages = {
    "pic1.jpg": "Closeup of a human eye",
    "pic2.jpg": "Closeup of a sea shell",
    "pic3.jpg": "Closeup of some flowers",
    "pic4.jpg": "Egyptian Hieroglyphics",
    "pic5.jpg": "Closeup of a moth"
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);
