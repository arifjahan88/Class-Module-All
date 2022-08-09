const expense = [
    {Month: 'january', cost: 300, quantity: 2},
    {Month: 'february', cost: 400, quantity: 3},
    {Month: 'March', cost: 800, quantity: 4},
    {Month: 'April', cost: 100, quantity: 5}
]

function totalexpense(expense){
    let sum = 0;
    for (let i = 0; i < expense.length; i++) {
        const element = expense[i];
        sum = (element.cost * element.quantity) + sum;
    }
    return sum;
}

const myexpense = totalexpense(expense);
console.log(myexpense);

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum);