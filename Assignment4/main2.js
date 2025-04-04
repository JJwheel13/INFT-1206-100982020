/*
Author: Justin Wheeler (100982020)
Completion Date: 2025-04-04
Purpose: To demonstrate the fundamentals of Javascript
File: main2.js
*/

// Define constants
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Define file locations for images
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
// Define alternative text for file locations
const altImages = {
    "pic1.jpg": "Closeup of a human eye",
    "pic2.jpg": "Closeup of a sea shell",
    "pic3.jpg": "Closeup of some flowers",
    "pic4.jpg": "Egyptian Hieroglyphics",
    "pic5.jpg": "Closeup of a moth"
}

// Loop over each image
for(const image of images) {
    // Create a new element in the gallery and apply attributes
    const newImage = document.createElement("img");
    newImage.setAttribute('src', `images2/${image}`);
    newImage.setAttribute('alt', altImages[image]);
    thumbBar.appendChild(newImage);
    // Introduce event listener on click for image location
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

// Register event listener on click
btn.addEventListener("click", () => { 
    // Darken the selected image if selected
    if(btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    // Lighten the selected image if selected    
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})
