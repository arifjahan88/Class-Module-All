let first = 34;
let second = 23;

console.log(first, second);

// swap aproch 1 => Distructuring
[ first, second ] = [ second, first ];
console.log(first, second);