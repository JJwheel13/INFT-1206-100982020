/*
Author: Justin Wheeler (100982020)
Completion Date: 2025-04-04
Purpose: To demonstrate the fundamentals of Javascript
File: main.js
*/

// Define Variables
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// randomValueFromArray function: Picks a random value from a selected array
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Define the general paragraph
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Define overwriting variables
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas", "this guy"];
const insertY = ["the soup kitchen", "Disneyland", "the White House", "Durham College"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away", "grew wings and flew away", "sank into the ground", "got struck by lightning"];

// Define event listener
randomize.addEventListener('click', result);

// Result function: Generate and display a randomized story
function result() {
    let newStory = storyText;

    // Define randomized elements
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    // Utilize randomized elements to overwright story elements
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    // If the custom-name entry isn't blank, replace all instances with the chosen name
    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll("Bob", name)
    }

    // If the uk radio-button is selected, convert the weight to stones, and the temperature to centigrade
    if(document.getElementById("uk").checked) {
        const weight = `${Math.round(300/14)} stone`;
        const temperature =  `${Math.round((94-32) * (5/9))} centigrade`;
        newStory = newStory.replaceAll("300 pounds", weight)
        newStory = newStory.replaceAll("94 fahrenheit", temperature)
    }

    // Define the story element as the result
    story.textContent = newStory;
    // Make the generated story visible
    story.style.visibility = 'visible';
}