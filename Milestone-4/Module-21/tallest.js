function maxinarray(numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if (element > largest){
            largest = element;
        }
    }
    return largest;

}

const myarray = [34, 56, 44, 73, 99, 36, 74];
const result = maxinarray(myarray);
console.log('Tallest person is ', result);