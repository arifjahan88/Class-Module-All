function wordreverse(str){
    const words = str.split(' ');
    const result = [];
    for (let i =  words.length - 1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    console.log(result);
}

const mywords = 'I am good Boy'
wordreverse(mywords);
