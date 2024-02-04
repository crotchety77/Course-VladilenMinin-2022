// Вам необходимо создать функцию getTotalPriceOfShoppingBag, которая будет
// принимать в себя 1 параметр shoppingBag. shoppingBag - это массив продуктов в
// корзине, состоящий из объектов, в каждом из которых хранится информация о названии
// продукта (product) и о количестве продукта в корзине (quantity).
// Также у интернет-магазина есть глобальный объект, в котором хранится вся нужная
// информация о каждой единице продукта:


const groceries = {
    "Orange Juice": {
        price : 1.5,
        discount: 10,
    },
    "Chocolate": {
        price : 2,
        discount : 0,
},
// more items...
}


// Функция getTotalPriceOfShoppingBag должна возвращать общую стоимость всех товаров
// в корзине с учетом скидок и с учетом указанных клиентом количеством продуктов.
// Итоговое значение должно быть округлено до сотых. Это можно сделать с помощью
// toFixed (https://developer.mozilla.org/...)
// Посмотрите на возможно возвращаемое значение функции getTotalPriceOfShoppingBag:

function getTotalPriceOfShoppingBag(shoppingBag){
    let sum = 0;
    // console.log(groceries['Orange Juice']);

    shoppingBag.forEach(item => {
        console.log(item.product, groceries);
        if (item.product === groceries){
            console.log(item.product);
        }
        // console.log(item.quantity);
    });

    
    return sum.toFixed(2);
}

const shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
]
const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 37.05