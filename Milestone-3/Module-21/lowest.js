function lowestinarray(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}

const mynumbers = [34, 56, 54, 73, 22, 93];
const result = lowestinarray(mynumbers);
console.log(result);