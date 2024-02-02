// Задание #8 (дополнительное)
// Ваша задача состоит в том, чтобы написать функцию, которая будет работать как
// мини-калькулятор математических выражений. Назовите данную функцию getMathResult.
// getMathResult принимает в себя 1 параметр expression, который является массивом и
// всегда состоит из 3-х элементов.
// Первый и 3-й элементы в массиве expression - это числа, которые могут записывать как
// тип данных number либо string (например, 100 или ‘100’). 2-й элемент - это
// математический знак, который является типом данных string. Математический знак может
// быть исключительно следующими строками: “>”, “<”, “=”, “+”, “-”, “*”, “/”. Если был знак,
// которого не существует в данной последовательности, то функция getMathResult должна
// возвращать ошибку в виде строки “Ошибка”.

getMathResult(['200', '+', 300]); // 500
function getMathResult(expression){
    if (expression.length < 3){
        return(console.log('Ошибка в размере массива. Значений меньше 2-ух'));
    }
    if (expression.length >= 3){
        let list = [];
        let znak;
        let cnt = 0;
        for (let i = 0; i < expression.length; i++) {
            
            if (isFinite(expression[i]) == true){
                console.log(expression[i]);
                // console.log(isFinite(expression[i]), expression[i]);

                list.push(expression[i]);
                console.log(list[cnt], cnt);
                cnt++;
                // console.log(cnt, list[cnt]);
                // console.log(cnt);
                // if (cnt == 3){
                //     break;
                // }
                
            }
            // if ([">", "<", "=", "+", "-", "*", "/"].includes(expression[i])){
            //     znak = expression[i];
            // }
        }
        console.log(list);

        // console.log(list[0], list[1], znak);
    }
}

//     // let isPresent = array.indexOf(numberToCheck) !== -1;
//     if (test2.includes(expression[1]) == false){
//         return(console.log('Ошибка в 2-ом значении'));

//     } 
//     expression[2];
//     return 0;
// }

// isFinite('101') // true
// Number.isFinite('123') // false
// console.log(isFinite('101'));
// console.log(Number.isFinite('101'));


// Также учтите, что в массив expression иногда может быть передано больше 3-х
// параметров. Но если все же такое было сделано, вам
// необходимо удалить лишние элементы в массиве, которые нельзя преобразовать к числу,
// которые являются ложными. 

// Если же длина массива expression меньше 3, то функция
// getMathResult должна возвращать ошибку в виде строки “Ошибка”.

// Например, если expression был передан как данный массив:
// ['100', 'hello', 'javascript', , 'help200', '+', 4]
// то в итоге он должен быть преобразован к:
// ['100', '+', 4]
// Примечание. В решении нельзя использовать eval



// Примеры результатов функции getMathResult:
getMathResult(['200', '+', 300]); // 500
getMathResult(['20', '-', '5']); // 15
getMathResult([100, '/', 100]); // 1
getMathResult([2, '-', 2]); // 0
getMathResult(['5', '>', '10']); // false
getMathResult(['5', '<', '10']); // true
getMathResult(['1', '=', 1]); // true
getMathResult(['1', '**', 1]); // 'Ошибка'
getMathResult(['1', '**']); // 'Ошибка'