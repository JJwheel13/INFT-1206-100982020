/*
Author: Justin Wheeler (100982020)
Completion Date: 2025-04-04
Purpose: To demonstrate the fundamentals of Javascript
File: main.js
*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas", "this guy"];
const insertY = ["the soup kitchen", "Disneyland", "the White House", "Durham College"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away", "grew wings and flew away", "sank into the ground", "got struck by lightning"];