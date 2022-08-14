function removedublicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const element = names[i];
        if(unique.includes(element) === false){
            unique.push(element);
        }
    }
    return unique;
}

const myarray = ['rofik', 
                'jobbar', 
                'kuddus', 
                'mofiz', 
                'kuddus', 
                'korim', 
                'rofik'];
console.log(removedublicate(myarray));