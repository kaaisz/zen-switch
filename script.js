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
// const endMessage = document.querySelector('#endMessage');

//finish and appear endMessage when button has been clicked again
const finishExercise = () =>{
  // button.removeAttribute('disabled');
  document.querySelector('#endMessage').innerHTML = "Well done.";
  button.innerHTML = "Start Whenever You're Ready";
}

const animate = (item, index) => {
  setTimeout(() => {
    circle.innerText = item;
    if (item === 'relax') {
      circle.className = 'circle';
    } else {
      circle.classList.add('circle-big', 'circle-' + item);
    }
    if (index === sequence.length - 1) {
      //make sure the animation completes before enabling button and adding text
      setTimeout(finishExercise, 1500);
    }
  }, 5000 * index);
}

//create animation for when clicking buttons
const animateAll = () => {
  // button.setAttribute('disabled', true);
  button.innerHTML = "Finish Exercise";
  endMessage.innerHTML = '';
  sequence.forEach((item, index) => {
    animate(item, index);
  });
}

//activate animateAll when button has been clicked
button.addEventListener('click', animateAll);