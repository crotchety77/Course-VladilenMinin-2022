// Методы массивов
// 1.Splice Цель удалить элементы из массива и вставить другие

let lessons = ["Math", "AVS", "OS", "English"];

lessons.splice(1,2, "Test", "Program");
// Изменяет текущий массив
// Начало удаления | Конец удаления
// 0, 1 ->  ['AVS', 'OS', 'English']
// 1, 2 ->  ['Math', 'English']
// 1,2, "Test", "Program" ->['Math', 'Test', 'Program', 'English']



// 2.Slice Обрезка
let agesOfClients = [25, 32, 19, 40];

// Неизменяет текующий массив
// Возвращает новый массив и копирует ту часть, которые выделил
let test = agesOfClients.slice(1,4);

// 1, 3 -> [32, 19]
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