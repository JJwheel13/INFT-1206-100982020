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

for(const image of images) {
    const newImage = document.createElement("img");
    newImage.setAttribute('src', `images2/${image}`);
    newImage.setAttribute('alt', altImages[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

btn.addEventListener("click", () => { 
    if(btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})
