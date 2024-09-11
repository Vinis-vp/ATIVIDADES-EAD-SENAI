let animals = [];
animals.push('cat', 'dog', 'bird');
console.log(animals);
animals.shift();
console.log(animals);
animals.unshift('monkey', 'snake');
console.log(animals);
animals[1] = ('giraffe');
console.log(animals);

let fruits = ['apple', 'banana', 'pineapple', 'watermelon'];
console.log(fruits.length);

fruits.forEach(function(fruta) {
    console.log(fruta);
});