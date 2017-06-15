
// Cat carousel

function fun() {
$('.thumbnail').click(function(event){
  let cat = $(event.currentTarget).find('img').attr('src');
  $('.hero img').attr('src', cat);
});

};
fun();


// 