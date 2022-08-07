// Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter

function odd_even(num1){
    if(num1 % 2 === 0){
        console.log("This is even number")
    }
    else{
        console.log("This is odd Number")
    }
}

odd_even(7);