'use strict';

// word count
function wordCount(element) {
  return element.length;
}

let songString = `Ground Control to Major Tom
Ground Control to Major Tom
Take your protein pills and put your helmet on
Ground Control to Major Tom (Ten, Nine, Eight, Seven, Six)
Commencing countdown, engines on (Five, Four, Three)
Check ignition and may God's love be with you (Two, One, Liftoff).`;


// regex
function textArray(string) {
  var regex = /[,'().]/g;
  var rmLineBreak = /[\n\r]+/g
  return string.replace(regex, '').replace(rmLineBreak, ' ').toLowerCase().split(' ');
};




// unique word count
function uniqueWordCount(string) {
  // change string into uniqueWords
  let uniqueWords = [];
  for (let i = 0; i <= element.length; i++) {
    if (element === element[i]) {
      uniqueWords.push(element[i]);
    }
  }


  // if this matches this, push
  // else ignore
  return array.length

}


// Average word length

function averageWordLength(element) {
  // get length of each word
  // divide that by array.length

}

function bob(){
  $('form').on('submit', function(event) {
    event.preventDefault();

    // remove hidden classes
    $(".text-report").removeClass('hidden');

    // add the results to html

    // create and add unique class to dd

    // console.log($('text-report dd:nth-child(2)'));

    // what input is
    let input = textArray($('#user-text').val());
    console.log('wordcount: ' + wordCount(input));

    // add unique class to dd
    $('.js-wordCount').text(wordCount(input))
  })
};

$(function() {
  bob()
})
