var deckofcards = [];
var suits = ["clubs", "diamonds", "hearts", "spades"];
var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

$(document).ready(function() {

  suits.forEach(function(suit) {

    ranks.forEach(function(rank) {
      $("#deck").append("<li>"+ rank + " of " + suit +"</li>");

    deckofcards.push(rank + " of " + suit);

    });

  });

});



//Use a forEach() loop within another forEach() loop to build an array representing a deck of cards. A deck consists of 52 cards - 13 ranks in each of 4 suits.

//Then, display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts").


var wordplay =  [];
var newwordplay = [];
var lengthTest3 = function(word) {
  return word.length >= 3;
};

$(document).ready(function() {

  $("form#wordplayform").submit(function() {
    var inputsentence = $("input#sentence").val();
// Turn that sentence into an array using the split method.
    wordplay = inputsentence.split([" "]);
    event.preventDefault();
    $("#wordplayoutput").toggle();
//  Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
    wordplay=wordplay.filter(lengthTest3);
//  Finally, reverse the order of the new array, join it back together into a string, and display it to the user.
    newwordplay = wordplay.reverse();
    var outputsentence=newwordplay.reduce(function(a,b){
        return a+" "+b;
    });
    $(".outputsentence").text(outputsentence);
  });
});


var groceryitems = [];
var uppercaseitems = [];

$(document).ready(function() {

  $("form#grocerylist").submit(function() {
     var item = $("input#grocery").val();
     groceryitems.push(item);
     event.preventDefault();
   });

  $("button#submit").click(function() {
    $("#grocerylist").toggle();
    uppercaseitems = groceryitems.map(function(lowercaseitem) {
      return lowercaseitem.toUpperCase();
    });
    uppercaseitems.sort();
    $("#outputlist").toggle();
    uppercaseitems.forEach(function(uppercaseitem) {
      $("#outputlist").append("<li>"+ uppercaseitem +"</li>");
    });
  });
});
