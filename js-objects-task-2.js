// Представьте, что вы разрабатываете программу выдачи талончиков для местной
// больницы. До этого талончики выписывались вручную и вам необходимо оптимизировать
// данную задачу.
// Вам требуется создать функцию giveTalonsInOrder, которая сортирует очередь из
// пациентов. Она принимает в себя 2 параметра:
// 1. patients - массив объектов. Каждый объект хранит информацию об имени пациента
// и его уникальном номере - id.
// 2. orders - массив уникальных номеров id, который указывает порядок, в котором
// должны стоять в очереди пациенты.
// Функция должна возвращать новый массив, в котором объекты из массива patients будут
// отсортированы по id из массива orders.
// Посмотрите на возможный результат функции giveTalonsInOrder:
const ordersArr = [4, 2, 1, 3];
// const ordersArr = [3,1,0,2];
const people = [
{ id: 1, name: "Максим" },
{ id: 2, name: "Николай" },
{ id: 3, name: "Ангелина" },
{ id: 4, name: "Виталий" },
];

function giveTalonsInOrder(people, ordersArr){
    // console.log(people[0].id);
    return ordersArr.map((order) => people[order-1]);

        // return orders.map((order) => objectWithIndexes[order]);
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);

// const people2 = { 
//     1: { id: 1, name: "Максим" },
//     2: { id: 2, name: "Николай" },
//     3: { id: 3, name: "Ангелина" },
//     4: { id: 4, name: "Виталий" },
//     };

// function giveTalonsInOrder(people, arr){
//     let result = [];
//     let i = 0
//     while (i != 4){
//         people.forEach(element => {
//             if (element.id === arr[i]){
//                 result.push(element);
//             }
//         })
//         i++
//     }
//     return result;
// }

// function giveTalonsInOrder(people, arr){
//     let result = [];
//     arr.forEach(obj => {
//         // console.log(people[0/], obj)
//         result.push(people.find(person => person.id === obj))
//     });
//     return result
// }

// const giveTalonsInOrder = (patients, orders) => {
//     const objectWithIndexes = patients.reduce((acc, curPerson) => {
//         acc[curPerson.id] = curPerson;
//         return acc;
//     }, {});
//     return orders.map((order) => objectWithIndexes[order]);
// }

// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);



// console.log(1);
/* Возвращает массив
[
{ id: 4, name: 'Виталий' },
{ id: 2, name: 'Николай' },
{ id: 1, name: 'Максим' },
{ id: 3, name: 'Ангелина' }*/