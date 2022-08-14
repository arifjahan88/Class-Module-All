// Write a function called make_avg() which will take an array of integers and
// the size of that array and return the average of those values.

function make_avg(numbers){
    sum = 0;
    for(let i = 0; i < numbers.length; i++ ){
        const element = numbers[i];
        
        sum = sum + element;
        const avg = sum / numbers.length;
        console.log(i, sum, avg); 
    }   
}

const mynumbers = [1, 2, 3, 4, 5];
make_avg(mynumbers);