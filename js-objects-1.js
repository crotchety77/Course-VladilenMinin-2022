// console.log('objects in js');

let mob = {
    // key: value,
    name: 'Slime',
    health: 20,
    dropLoot:{
        loot: {
            name: 'jele',
            count: 1
        },
        experience: 2
    }
}

// console.log(mob);

// 1 Рекомендуется
// console.log(mob.dropLoot);
// console.log(mob.name);

// 2
// console.log(mob['dropLoot']);

// const key = 'name';
// console.log(mob[key]);

// Цепочка
// console.log(mob.dropLoot.loot.name);
// console.log(mob.dropLoot['experience']); // смешано

// Удаление/Изменение/Добавление свойств.

// Добавление
mob.attack = 20;
// Изменение
mob.health -= 2;
// Удаление
delete mob.dropLoot.loot;
console.log(mob);