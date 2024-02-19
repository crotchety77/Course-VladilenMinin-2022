// Какими типами могут быть ключи в объекте?

const id = Symbol('id');

const user = {
    [id]: 1, // Не робит
    [Symbol('id')]: "a", // Не робит
    [Symbol('id')]: 2, // Не робит
    [Symbol('id')]: 2, // Не робит
    [Symbol("a")]: "a",
    name: 'Andrey',
    name: 'Aleksey', // применяется последний
    10: 123,
    undefined: undefined,
    [false]: false,

};

console.log(Object.keys(user)); 
console.log(Object.values(user)); 

// ------------------------------------------------
let obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

console.log(obj);
for (var i in obj) {
  console.log(i); // выведет "c" и "d"
}
console.log(Object.keys(obj)); 
console.log(Object.values(obj)); 

