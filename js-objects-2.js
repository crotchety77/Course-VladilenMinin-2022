// 7 типов данных ПРИМИТИВЫ = 1 тип НЕ ПРИМИТИВ (ссылочный тип - Объект)




const developer = {
    name: 'Andrey',
};

let developerName = 'Maxim';

let developerName1 = ['Maxim'];

const setName = (entity, value) =>{
    if (typeof entity === 'object'){
        entity.name = value;
    }
    else{
        // console.log(entity, value);

        entity = value;
        console.log(entity, value);

        // Значение осталось без изменения
    }
}
// Массив тоже entity объект и можно менять значения

setName(developer, 'Ruslan');
setName(developerName, 'Ruslan');
setName(developerName1, 'Ruslan');

// console.log(developer);
// console.log(developerName);
// console.log(developerName1);

console.log({} === {}); 
console.log([] === []);
// Идентичны и пусты. false т.к. сравниваем разные ссылочные значения
// оператор === сравнивает объекты по ссылке, а не по содержимому. 
// они имеют разные ссылки в памяти, даже если их структуры одинаковы.

const test = { name: 'Andrey' };
const testCopy = test;
console.log(test === testCopy);
// True