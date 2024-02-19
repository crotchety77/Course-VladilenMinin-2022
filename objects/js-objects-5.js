const object1 = {
    name: 'Andrey',
    age: 12
};

const object2 = {
    name: 'Dota2',
    name2: "Помойка",

};

const object3 = {
    ...object1,
    ...object2
}

console.log(object3);

// Проверка на существование поля
// object1 существует = True
if (object1 && object2.info){
    console.log(1);
} else {
    console.log(2);
}
 
if (object2.info.age?.help){
    // если будет object2?.info.age то ошибка
    // а вот так можно object2.info?.ag
    // но дальше не идёт object2.info.age?.help
    console.log(1);
} else {
    console.log(23);
}
 
