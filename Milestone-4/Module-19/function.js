function sum(num1, num2) {
    var total = num1 + num2;
    console.log(total);
}

sum(66, 34);

// return statement 
function bringsingara(money){
    var singaraprice = 10;
    var quantity = money / singaraprice;
    return quantity;
}

// var mytaka = 50;
var singaras = bringsingara(100);
console.log("I am eating now: " + singaras);

// extra 
function sum(num1, num2) {
    var total = num1 + num2;
    return total;
}

var total1 = sum(10, 20);
var total2 = sum(20, 30);
var total3 = sum(total1, total2);
console.log(total3);