// business logic
var textinput;
var arrayinputs = [];
var uniquearrays = [];
var wordtotals = [];
function checkAvailability(arr, val){
  return arr.some(function(arrVal){
    return val === arrVal;
  });
};
//input a block of text and
$(document).ready(function() {
  $("form#wordorderform").submit(function() {
    textinput = $("input#textinput").val();
    arrayinputs = textinput.split([" "]);
    arrayinputs = arrayinputs.sort();
    //and return how many times the words appeared.
    arrayinputs.forEach(function(arrayinput1){
      var total = 0;
      arrayinputs.forEach(function(arrayinput2) {
        if (arrayinput1 === arrayinput2) {
          total += 1;
        };
      });
      //return a list of all the unique words
      if(checkAvailability(uniquearrays, arrayinput1)===false) {
        uniquearrays.push(arrayinput1);
        $("#outputlist").append("<li>" + arrayinput1 + " " + total + "</li>")
      }

    });

  event.preventDefault();
  });
});

//If you finish that are you're feeling really comfortable with forEach() loops, try to do do the above exercise but order the list by the number of appearances - greatest to least. For words that appear the same amount of times, order by which word appeared first.
