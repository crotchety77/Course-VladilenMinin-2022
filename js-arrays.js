// Методы массивов
// Splice Цель удалить элементы из массива и вставить другие
// 1.Splice Цель удалить элементы из массива и вставить другие

let lessons = ["Math", "AVS", "OS", "English"];

// Slice Обрезка
// 2.Slice Обрезка
// Неизменяет текующий массив

let agesOfClients = [25, 32, 19, 40];
let test = agesOfClients.slice(1,4);

// 1, 3 -> [32, 19]
console.log(agesOfClients.splice(1,3));
console.log(test);
// 1, 4 -> [32, 19, 40]
// console.log(agesOfClients);
// console.log(test);

// 3.indexOf
// Существует ли в массиве значение?

let food = ["Яблоко", "Манго", "Апельсин", "Дыня"];

// console.log(food.indexOf("Апельсин")); // 2
// console.log(food.indexOf("Шоколад")); // -1

// 4.includes

let technologies = ["Html", "CSS", "JS"];

// console.log(technologies.includes("Html")); // True
// console.log(technologies.includes("Docker")); // False

// 5. split (метод строк) но мы можем использовать в массивах

let list = "Кроссовки, джинсы, рюкзак, фотоаппарат";
let listArray = list.split(", ");
console.log(listArray);

let string = "Кроссовка";
console.log(string.split(""));

// 6. join объединение массива -> строка

let list2 = listArray.join("-");
console.log(list2);
// Кроссовки-джинсы-рюкзак-фотоаппарат

// 7. reverse

// Изменяет текущий массив
console.log(technologies.reverse());
console.log(technologies);