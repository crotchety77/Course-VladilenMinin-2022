// Итерирование элементов в объекте

const info = {
    id: 1,
    price: 100,
    currency: '$',
    name: 'Лада Гранта'
};

// Старый способ
// for (const key in info) {
//     console.log(key);
//     const value = info[key];
//     console.log(value);
// }

const keys = Object.keys(info);
console.log(keys);
const values = Object.values(info);
console.log(...values);
const entries = Object.entries(info); // [[key:value],[key:value]]
console.log(entries);
console.log(entries[0]);
console.log(info);