const shopping = [
    {Phone: 'samsung', price: 20000, storage: '256', camera: '64mp' },
    {Phone: 'xaiomi', price: 50000, storage: '128', camera: '64mp' },
    {Phone: 'nokia', price: 83000, storage: '64', camera: '64mp' },
    {Phone: 'realme', price: 33000, storage: '16', camera: '64mp' },
    {Phone: 'samsung', price: 84000, storage: '4', camera: '64mp' }
]

function chepest(shopping){
    let chipest = shopping [0];
    for (let i = 0; i < shopping.length; i++) {
        const element = shopping[i];
        if(element.price < chipest.price){
            chipest = element;
        }
        
    }
    return chipest;
}

const myprice = chepest(shopping);
console.log(myprice);