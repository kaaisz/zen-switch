'use strict';

const contents = [
  '1', 'relax',
  '2', 'relax',
  '3', 'relax',
  '4', 'relax',
  '5', 'relax',
  '6', 'relax',
  '7', 'relax',
  '8', 'relax',
];

//to reverse after all counts are finished.
const sequence = [...contents, 'relax', ...contents.slice().reverse(), 'relax'];

//get element to activate animation by clicking button
const circle = document.querySelector('#circle');
const button = document.querySelector('#animateButton');
const endMessage = document.querySelector('#endMessage');

const animate = (item, index) => {
  setTimeout(() => {
    circle.innerText = item;
    if (index === sequence.length - 1) {
      //make sure the animation completes before enabling button and adding text
      setTimeout(finishExercise, 2500);
    }
  }, 5000 * index);
}

//create animation for when clicking buttons
const animateAll = () => {
  button.setAttribute('disabled', true);
  endMessage.innerHTML = '';
  sequence.forEach((item, index) => {
    animate(item, index);
  });
}

//activate animateAll when button has been clicked
button.addEventListener('click', animateAll);