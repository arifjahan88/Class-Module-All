// 1) If I write []==true,will it show true or false? Check it out.

// if([]==true){
//     console.log("This is Truthy")
// }
// else{
//     console.log("This is Falsy")
// }

// 2) Use === to check if the true === "true" gives true or false.

// if(true === "true")(
//     console.log("This is Falsy")
// )
// else(
//     console.log("This is Truthy")
// )

// 3) Write an arrow function that will take a parameter and will check if the
// parameter is a number or not by using isNaN(). And return true or false.

const check = (Number) =>{
    if(typeof Number === 'number'){
        return true;
    }
    else{
        return false;
    }
}
const x = 1254;
const cheaker = check(x);
console.log(cheaker);