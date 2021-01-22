

            //kilometerToMeter//

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    if (kilometer < 0) {
        return 'Error: The value cannot be negative';
    }
    else if (kilometer == undefined) {
        return 'Error: The value cannot be empty';
    }
    else {
        return meter;
    } 
}


            //budgetCalculator//

 function budgetCalculator(watch, mobile, laptop){
    var totalSum = watch * 50 + mobile * 100 + laptop * 500;
        if (watch == undefined || mobile == undefined || laptop == undefined) {
            return 'Error: You have to give three values';
        }
        else if (watch < 0 || mobile < 0 || laptop < 0) {
            return 'Error: Negative values are not allowed'
        }
        else {
            return totalSum;
        }
    }



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




            //MegaFriend//

function megaFriend(friends){
    var name = friends[0];
        for(var i = 0; i < friends.length; i++){
            var element = friends[i];
            if(name.length < element.length){
                name = element;
            }
        }
        if(name == undefined){
            return 'Error: The array cannot be empty';
            }
        else if (typeof name == 'number'){
            return 'Error: The array cannot be number';
            }
        else{
            return name
            }
    }
 