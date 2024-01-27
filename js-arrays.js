// Методы массивов
// Splice Цель удалить элементы из массива и вставить другие

let lessons = ["Math", "AVS", "OS", "English"];

lessons.splice(1,2, "Test", "Program");
// Изменяет текущий массив
// Начало удаления | Конец удаления
// 0, 1 ->  ['AVS', 'OS', 'English']
// 1, 2 ->  ['Math', 'English']
// 1,2, "Test", "Program" ->['Math', 'Test', 'Program', 'English']



// Slice Обрезка
let agesOfClients = [25, 32, 19, 40];

// Неизменяет текующий массив
// Возвращает новый массив и копирует ту часть, которые выделил
let test = agesOfClients.slice(1,4);

// 1, 3 -> [32, 19]
console.log(agesOfClients.splice(1,3));
console.log(test);