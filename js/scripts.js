// business logic
// var textinput;
// var arrayinputs = [];
// var uniquearrays = [];
// var wordtotals = [];
// var uniquetwoarrays = [];
function checkAvailability(arr, val){
  return arr.some(function(arrVal){
    return val === arrVal;
  });
};
// For words that appear the same amount of times, order by which word appeared first.
function comparisonCheck(arr1, arr2) {
  if (arr1[1] === arr2[1]) {
    return arr1[2]-arr2[2];
  } else {
    return arr2[1]-arr1[1];
  }
};

//user interface or front-end logic
//input a block of text and
$(document).ready(function() {
  $("form#wordorderform").submit(function() {
    var textinput;
    var arrayinputs = [];
    var uniquearrays = [];
    var wordtotals = [];
    var uniquetwoarrays = [];
     $("ul#outputlist li").remove();
    textinput = $("input#textinput").val();
    arrayinputs = textinput.split([" "]);
    //and return how many times the words appeared.
    arrayinputs.forEach(function(arrayinput1){
      var total = 0;
      var index= 0;
      var escape=0;
      arrayinputs.forEach(function(arrayinput2) {
        if(escape < 1) {
          index +=1
        }
        if (arrayinput1 === arrayinput2) {
          total += 1;
          escape += 1;
        };
      });
      //return a list of all the unique words
      if(checkAvailability(uniquearrays, arrayinput1)===false) {
        uniquearrays.push(arrayinput1);
      //  $("#outputlist").append("<li>" + arrayinput1 + " " + total + "</li>")
        uniquetwoarrays.push([arrayinput1, total, index]);
      }
    });
    uniquetwoarrays = uniquetwoarrays.sort(comparisonCheck);
    uniquetwoarrays.forEach(function(arr) {
      $("#outputlist").append("<li>" + "word(col1): " + arr[0] + " #times(col2): " + arr[1] + " first appearance/index(col3): " + arr[2] + "</li>");
    });
  event.preventDefault();
  });
});
