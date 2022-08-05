function getanarray(numbers){
    sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
        console.log(element, sum);
    }
}

const mynumbers = [34, 63, 56, 94, 73, 88];
getanarray(mynumbers);