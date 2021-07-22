//  https://github.com/Forhad57Hossain/Assignment-3


 /* 1 kilometer = 1000 meter */
 function kilometerToMeter(kilo) {
    var meter = kilo * 1000;
    return meter;
}
var factor = kilometerToMeter(1);
console.log(factor);



/* per piaces watch 50, mobile 100 and laptop 500. calculate the total. */
function budgetCalculator(watch, mobile, laptop) {
    var sum = watch * 50 + mobile * 100 + laptop * 500;
    return sum;
}
var total = budgetCalculator(1,1,1);
console.log(total);
 


//1 - 10days = 100$, 11 - 20days = 80$, 21 - 100+days = 50$ 
function hotelCost(lDays){
    var price = 0;
    if (lDays <= 10){
        price = lDays*100;
    } 
    else if(lDays<=20){
        var firstsection = 10 *100;
        var remaining = lDays - 10;
        var secoundsection = remaining * 80;
        price = firstsection + secoundsection;
    }
    else {
        var firstsection = 10 * 100;
        var secoundsection = 10 * 80;
        var remaining = lDays - 20;
        var thirdsection = remaining * 50;
        price = firstsection + secoundsection + thirdsection;
    }
    return price;
}
var cost = hotelCost(21);
console.log(cost)



/* Find longest string in array  */
function megeFriend(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  var word = megeFriend(["Kamal","jamal","forhad", "mahbub", "HeroJhankar", "faisal", "lol", "lazy"]);
  console.log(word);