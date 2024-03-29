// Задание #6 (дополнительное)
// К вам пришёл заказчик, который является владельцем одной из игровых веб-платформ.
// Он хочет, чтобы вы разработали для его сайта новую игру, которая покорит сердца многих
// пользователей.
// В игре есть 2 игрока: герой и враг. Они будут драться друг с другом. У каждого игрока
// есть шкала здоровья, которая изначально равна 100. При каждом ударе у
// противоположного игрока отнимается по 10 единиц здоровья. Побеждает тот, у кого
// здоровье осталось больше 0.
// Сейчас вам необходимо создать функцию startGame, которая будет принимать в себя 2
// параметра:
// 1. heroPlayer. Объект игрока, который содержит свойства name - имя героя; health -
// шкала здоровья, которая изначально равна 100; heatEnemy - функция, которая
// принимает в себя объект enemy и отнимает у объекта enemy 10 единиц здоровья
// (ключ health)
// 2. enemyPlayer. Объект врага, который содержит свойства name - имя героя; health -
// шкала здоровья, которая изначально равна 100; heatHero - функция, которая
// принимает в себя объект hero и отнимает у объекта hero 10 единиц здоровья (ключ
// health)
// Внутри функции startGame вам необходимо случайным образом генерировать число от
// 0 до 1. Если выпадает 0, то нужно вызвать метод heatEnemy у объекта heroPlayer, если 1
// - то heatHero у enemyPlayer
// Для того, чтобы функция генерировала несколько раз случайные значения и игроки
// дрались, пока у кого-то не закончатся жизни, рекомендуется использовать цикл while,
// который будет выполнятся, пока у любого игрока свойство health не станет меньше либо
// равно нулю.
// После выполнения цикла необходимо определить, какой игрок выиграл, и вывести
// сообщение через,где name и health - значения свойств победившего игрока.
// alert(`${name} победил! У него осталось ${health} здоровья`)
// Для генерации случайных значений используйте следующую функцию.

function startGame(heroPlayer, enemyPlayer){

    function getRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function randomZeroOrOne() {
        return Math.round(Math.random());
    }

    function heatHero(player){
        player.health -= getRandomNumberInRange(10, 20);
        // console.log(player.health);
    }

    while (heroPlayer.health > 0 && enemyPlayer.health > 0){
        // console.log(1);
        let pick = randomZeroOrOne();
        if (pick == 1){
            heatHero(enemyPlayer);
        }
        else{
            heatHero(heroPlayer);
        }
    }

    console.log(heroPlayer.health,enemyPlayer.health);
    // Кто победил?
    if (heroPlayer.health <= 0) {
        console.log(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`)
        
    }
    else{
        console.log(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`)
    }
}



// Для проверки работоспособности функции startGame используйте данный код. В нем
// нет методов heatEnemy и heatHero, вам необходимо самим их реализовать.
const hero = {
name: 'Batman',
health: 100,
};
const enemy =
{
name: 'Joker',
health: 100,
}
startGame(hero, enemy);