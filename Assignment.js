

            //kilometerToMeter//

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter 
}
var result = kilometerToMeter(10);
console.log(result);



            //budgetCalculator//

 function budgetCalculator(watch, mobile, laptop){
    var total = watch * 50 + mobile * 100 + laptop * 500;
    return total;
}
var totalAmount = budgetCalculator(5, 2, 1);
console.log(totalAmount);



        //hotelCost//

function hotelCost(days) {
    var amount = 0;
    if(days <= 10){
        amount = days * 100;
    } else if(days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        amount = firstPart + secondPart;
    }else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        amount = firstPart + secondPart + thirdPart;
    }
    return amount
}
var totalAmount = hotelCost(35);
console.log(totalAmount);



            //MegaFriend//

function megaFriend(friends){
    var name = friends[0];
        for(var i = 0; i < friends.length; i++){
            var element = friends[i];
            if(name.length < element.length){
                name = element;
            }
        }
        return name
    }
    var friends = ['fahad', 'jfaroela', 'btkalerj', 'skdiroif', 'rafifero', 'abusayid', 'emon'];
    var longestWord = megaFriend(friends);
    console.log(longestWord) 