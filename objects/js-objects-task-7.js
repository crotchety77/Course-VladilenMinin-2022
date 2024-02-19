// Задание #7 (дополнительное)
// Представьте, что в полицейском участке проводится расследование. Было совершено
// несколько преступлений. У полицейских есть другие более приоритетные задания,
// поэтому они попросили вас написать программу, которая будет вычислять преступника по
// уже известным данным.
// Ваша задача состоит в том, чтобы создать функцию getKiller. getKiller принимает в себя
// 2 параметра:

// 1. suspectInfo. Это объект, в котором ключи - это подозреваемые в преступлении
// люди, а значения - массивы людей, которых видели подозреваемые в день
// убийства

// 2. deadPeople. Это массив с именами людей, которых убил преступник

// Преступником является тот, кто видел всех убитых людей в день убийства. Функция
// getKiller должна возвращать имя преступника.
// Примеры результатов функции getKiller:

//.include deadPeople
// function getKiller(suspectInfo, deadPeople){
//     for (let key in suspectInfo) {
//         // Мой вариант
//         let k = 0;
//         for (let i = 0; i < suspectInfo[key].length; i++){

//             for (let j = 0; j < deadPeople.length; j++){
                
//                 if (suspectInfo[key][i] == deadPeople[j]){
//                     k++;
//                     console.log(k, deadPeople[j]);
//                     if (k == deadPeople.length){
//                         console.log(key);
//                         return;
//                     }
//                 } 
//             }
//         }
//     }
// }

function getKiller(suspectInfo, deadPeople) {
    let killerName = '';
    Object.entries(suspectInfo).forEach((data) => {
        const suspectPerson = data[0];
        const peopleWereSeen = data[1];
        const isKiller = deadPeople.every((deadName) => {
            return peopleWereSeen.includes(deadName)
        });
        

        if (isKiller) {
            killerName = suspectPerson;
        }
    });
    return console.log(killerName);
}

//подозреваемые в преступлении
getKiller({
'Johnny': ['David', 'Kyle', 'Lucas'],
'John': ['David', 'Kyle', 'Lucas'],
'James': ['Jacob', 'Bill', 'Lucas'],
'Peter': ['Lucy', 'Kyle'],
},

['Lucas', 'Bill']
);

// Убийца James
getKiller(
{
'Brad': [],
'Megan': ['Ben', 'Kevin'],
'Finn': [],
},
['Ben']
); // Убийца Megan