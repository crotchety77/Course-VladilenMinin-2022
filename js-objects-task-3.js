function handleObjects(obj, key, action){
    if (action === 'get'){
        return (console.log(obj.key));
    }
    if (action === 'add'){
        obj.key = key;
        return obj;
    }
    if (action === 'delete'){
        delete obj[key];
        return obj;
    }

    return obj;

}



// handleObject(testObj, 0,'get');
// handleObject(testObj, 1234,'add');
// console.log(testObj);
// handleObject(testObj, 'word' ,'add');
// console.log(testObj);
// handleObject(testObj, 0 ,'delete');
// console.log(testObj);

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}
const result = handleObjects(student, 'programmingLanguage', 'delete');
console.log('result', result);
const result2 = handleObjects(student, 'Language', 'add');
console.log('result', result);
    