 function factorial(number){
    let num = 1;
    let fact = 1;
    while(num <= number){
        fact = fact * num;
        num++;
    }
    return fact;
 }

const result = 3;
const bringresult = factorial(result);
console.log(bringresult);