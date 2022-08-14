function reversestring(text){
    let reversed = '';
    for(let i = text.length - 1; i >= 0; i-- ){
        const element = text[i];
        reversed = reversed + element;
    }
    return reversed;
}

const mytext = 'My name is Arif Jahan';
console.log(mytext);
const result = reversestring(mytext);
console.log(result);