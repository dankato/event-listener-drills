'use strict';
// Cat carousel

// function fun() {
//   $('.thumbnail').click(function (event) {
//       let cat = $(event.currentTarget).find('img').attr('src');
//       $('.hero img').attr('src', cat);
//     });

// }
// fun();


// Return of FizzBuzz

function fizzBuzz(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      arr.push ('fizzbuzz');
    } else if (i % 5 === 0) {
      arr.push('buzz');
    } else if (i % 3 === 0) {
      arr.push('fizz');
    } else {
      arr.push(i);
    }

  } 
  return arr;
}

// fizzBuzz(15);

$('#number-chooser').on('submit', function(event) {
  event.preventDefault();
  const fizzBuzzArr = fizzBuzz($('#number-choice').val());
    // console.log(fizzBuzzArr);
    $( '.js-results' ).empty();
  fizzBuzzArr.forEach(function(element) {
    if(element === 'fizzbuzz') {
      $('.js-results').append(`<div class="fizz-buzz-item fizzbuzz"><span>${element}</span></div>`);
    } else if (element === 'buzz') {
      $('.js-results').append(`<div class="fizz-buzz-item buzz"><span>${element}</span></div>`);
    } else if (element === 'fizz') {
      $('.js-results').append(`<div class="fizz-buzz-item fizz"><span>${element}</span></div>`);
    } else {
      $('.js-results').append(`<div class="fizz-buzz-item"><span>${element}</span></div>`);
    }
  }); 
});


// Lightbulb save for later