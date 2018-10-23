// function changeVowelsToDash (array) {
//   var vowelsReplacedWithDashes = [];
//   array.forEach(function(element){
//     if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u" ) {
//       vowelsReplacedWithDashes.push("-");
//     } else {
//       vowelsReplacedWithDashes.push(element)  ;
//     }
//   });
//   return vowelsReplacedWithDashes;
// }
//
// $(document).ready(function() {
//   $("#form").submit(function(event) {
//     event.preventDefault();
//
//     var sentence = ($("input#sentence").val()).split("");
//     console.log(sentence);
//
//     changeVowelsToDash(sentence);
//
//
//   });
// });
function changeVowelsToDash(array) {
  var vowelsReplacedWithDashes = []
  array.forEach(function(letters) {
    if (letters === "a" || letters === "e" || letters === "i" || letters === "o" || letters === "u") {
    vowelsReplacedWithDashes.push("-");
  } else {
    vowelsReplacedWithDashes.push(letters);
  }
  });
  return vowelsReplacedWithDashes;
}



$(document).ready(function() {
  $("#form").submit(function(event) {
  event.preventDefault();


  var sentence = ($("input#sentence").val()).split("");
var newSentence = changeVowelsToDash(sentence);

  console.log(newSentence);

});


});
