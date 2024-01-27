const goals = [8, 1, 1, 3, 2, -1, 5];

// 1. Самый результативный матч по количеству голов. Выведите в модальном окне
// через alert сообщение “Самый результативный матч был под номером number. В
// нем было забито numberOfGoals гол(ов).” (замените number на порядковый номер
// матча, а numberOfGoals - на количество голов в самом результативном матче).
// Если самых результативных матчей несколько, то выведите первый из них.


// Использование метода apply для нахождения минимального элемента в массиве считается
// устаревшим с появлением оператора spread. Давайте посмотрим пример:

numberOfGoals = Math.max(...goals);
// Нужно узнать что такое spread оператор.
number = goals.indexOf(numberOfGoals);

console.log(`Самый результативный матч был под номером в ${number+1}. в нём было забито ${numberOfGoals} гол(ов).`);

// Самые нерезультативные игры. В массиве нужно найти все самые
// нерезультативные игры (все матчи, у которых количество голов между собой
// совпадает и является минимальным). В данном массиве goals это будут 2 матча
// под номерами 2 и 3 с количеством голов по 1. Выведите через alert сообщение
// “Самые нерезультативные матчи были под номерами numbers. В каждом из них
// было забито по numberOfGoals мячу(а).” (замените numbers на порядковые номера
// матчей и отобразите их через запятую, а numberOfGoals - на количество голов в
// самом нерезультативном матче). Не берите в учет игры с автоматическим
// поражением.

// let minGoals = [];

// numberOfGoals = Math.min(...goals);


// 7.2
let minNumber = goals[0];

goals.forEach((goal, index) => {
    if (goal < minNumber && goal >= 0) {
        minNumber = goal;
    }
});

const minNumberOfGoals = goals
.map((number, index) => number === minNumber ? index + 1 : -1) // [-1, 2, 3, -1, -1, -1, -1]
.filter((goal) => goal > 0); // [2, 3]
console.log(`Самые нерезультативные матчи были под номерами ${minNumberOfGoals.join(", ")}. В каждом из них было забито по ${minNumber} мячу(а).`);

// 7.3
// Общее количество голов за сезон. Не берите в учет игры с автоматическим
// поражением. Выведите сообщение через alert “Общее количество голов за сезон
// равно numberOfGoals” (замените numberOfGoals на число общее количества голов
// за сезон).

// Через reduce не вышло, т.к. надо ставить условие goal > 0, а он хавает -1.
// const sumGoals = goals.reduce(function (currentSum, currentNumber) {
//   if (currentNumber > 0){
//   return currentSum + currentNumber
//   }
// }, 0);

// Моё решение
// let sumGoals = 0;
// goals.forEach((goal, index) => {
//   if (goal >= 0) {
//    sumGoals += goal;
//   }
// });

const sumGoals = goals.reduce((acc, goalNumber) => {
  return goalNumber >= 0 ? acc + goalNumber : acc;
}, 0);

console.log(`Общее количество голов за сезон равно ${sumGoals}`);