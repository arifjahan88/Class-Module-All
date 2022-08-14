// 1. You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.

var b = 13;
var a = 79;
var c = 45;

if(a > b && a > c) {
    console.log("a is the largest number");
}
else if(b > c && b > a) {
    console.log("b is the largest number");
}
else{
    console.log("c is the largest number");

}

// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.
var a = 9;
var b = 8;
var c = 9;

if(a == b && b == c){
    console.log("Eqial Traiangle");
}
else if(a == b || b == c || a == c){
    console.log("Isosceles");

}
else{
    console.log("Not Isosceles");

}
