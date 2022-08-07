const friends = [34, 56, 73, 66, 83, 34];

// console.log(friends.slice(2,5));

const partial = friends.splice(1,4, 77,99);
console.log(partial);
console.log(friends);

// N:B => slice mane holo je main array er ekta copy version se kete niye ashbe. ar splice holo je main array er oi value gulo se puratay niye asgbe kete bad diye.