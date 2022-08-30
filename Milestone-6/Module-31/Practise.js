// problem 1
numbers1 = [1,3,5,7,9];
const evennumbers = numbers1.map(num => num+1);
console.log(evennumbers);

// problem 2
numbers2 = [33,50,79,78,90,101,30];
const divisable = numbers2.filter(num => num % 10 === 0);
console.log(divisable);
const divisable2 = numbers2.find(num => num % 10 === 0);
console.log(divisable2);

// practise problem 1
numbers3 = [1,9,17,22];
const redusable = numbers3.reduce((old, now) => old + now, 0);
console.log(redusable);

// practise problem 2
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'sanorita', age: 22},
]

const element = people.map(age => age.age);
const total = element.reduce((old, now) => old + now, 0);
console.log(total);

// practise problem 3
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
        lat: "-37.3159",
        lng: "81.1496"
        }
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
        }
  }