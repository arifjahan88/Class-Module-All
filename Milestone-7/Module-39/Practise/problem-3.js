/*
Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third parameter will be a string) that will perform arithmetic operation depending on the third parameter and will print the result. For example:

    1. Print result of num1+num2 if operation is “add”
    2. Print result of num1-num2 if operation is “subtract”
    3. Print result of num1*num2 if operation is “multiply”
    4. Print result of num1/num2 if operation is “divide”
    5. Print result of num1%num2 if operation is “modulus”
    6. Else print “Invalid operation”
*/

const operation = (num1, num2, num3) =>{
    if(num3 === "add"){
        let result = num1 + num2;
        return result;
    }
    if(num3 === "subtract"){
        let result = num1 - num2;
        return result;
    }
    if(num3 === "multiply"){
        let result = num1 * num2;
        return result;
    }
    if(num3 === "divide"){
        let result = num1 / num2;
        return result;
    }
    if(num3 === "modulus"){
        let result = num1 % num2;
        return result;
    }
    else{
        const value = console.log("Invalid operation")
        return value;
    }
}

const stringvalue = "multiply"
const finalresult = operation(5, 3, stringvalue);
console.log(finalresult);