console.log('task 9');
let array = [];
let array2 = [];
function createMatric(array, n,m){
    for(let i = 0; i < n; i++){
        // array[i] = [];
        row = []
        for(let j = 0; j < m; j++){
            // array[i].push(j);
            row.push(j+1);
        }
        array.push(row);
    }
}

createMatric(array,3,5);
console.log(array);
createMatric(array2,5,6);
console.log(array2);
