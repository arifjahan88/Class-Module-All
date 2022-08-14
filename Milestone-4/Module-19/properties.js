shoppingcart = {
    name: "Mobile",
    price: 100,
    quantity: 1,
    color : "black",
    brand : "Apple",
}
 var pricecount = shoppingcart["price"];
 
 var propertyname = 'price';
 var propertyvalue = shoppingcart[propertyname];
    console.log(propertyname, propertyvalue);

var properties = Object.keys(shoppingcart);
var values = Object.values(shoppingcart);
console.log(properties, values);