'use strict';

// word count
function wordCount(element) {
  return element.length;
}

// Major tom lyrics
let songString = `Ground Control to Major Tom
Ground Control to Major Tom
Take your protein pills and put your helmet on
Ground Control to Major Tom (Ten, Nine, Eight, Seven, Six)
Commencing countdown, engines on (Five, Four, Three)
Check ignition and may God's love be with you (Two, One, Liftoff).`;


// regex
function textArray(string) {
  var regex = /[,'().?\n|\r]/g;
  var rmLineBreak = /[\n\r]+/g;
  return string.replace(regex, '').replace(rmLineBreak, ' ').toLowerCase().split(' ');
}

// unique word count
function uniqueWordCount(string) {
  let uniqueWords = [];
  for (let i = 0; i < string.length; i++) {
    if(uniqueWords.indexOf(string[i]) === -1) {
      uniqueWords.push(string[i]);
    }
  }
  return uniqueWords.length;
}

// Average word length
function averageWordLength(element) {
  var wordCount = element.length;
  var words = element.join('').length;
  var total = words/wordCount;
  var roundDown = Math.floor(total* 100)/100; 
  return roundDown;
}

function bob() {
  $('form').on('submit', function (event) {
    event.preventDefault();

    // remove hidden classes
    $('.text-report').removeClass('hidden');

    // create and add unique class to dd
    // console.log($('text-report dd:nth-child(2)'));

    // what input is
    let input = textArray($('#user-text').val());
    // console.log('wordcount: ' + wordCount(input));

    // add to browser
    $('.js-wordCount').text(wordCount(input));
    $('.js-uniqueCount').text(uniqueWordCount(input));
    $('.js-avgWordLength').text(averageWordLength(input) + ' characters');   
  });
}

// when page finishes loading, run this
$(function () {
  bob();
});
