// // problem 1
// const mul = (num1, num2,num3) => {
//     const result = num1 * num2 * num3;
//     return result;
// }

// console.log(mul(1,2,3));

// // problem - 2
// const printer = `I am a web develoer.
// I love to code.
// I love to eat Briyani.`
// console.log(printer);

// // Problem-3
// const defult = (number1, number2 = 29) => {
//     const total = console.log(number1, number2);
//     return total;
// }
// defult(10)

// Problem - 4
let friendsname = ["ashik", "Jahan", "Roman", "Amir"];

const cheaklength = (friendsname) =>{
    for (const name of friendsname){
        if(name.length % 2 == 0){
            console.log(name);
        }
        //console.log(name.length % 2 == 0);
    }
}

cheaklength(friendsname);
