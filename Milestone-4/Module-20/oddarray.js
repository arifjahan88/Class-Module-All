function oddarray(numbers){
    sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element % 2 === 1){
            sum = sum + element;
            console.log(i,element, sum);
        }
    }
}

const mynumbers = [34, 63, 56, 94, 73, 88];
oddarray(mynumbers);