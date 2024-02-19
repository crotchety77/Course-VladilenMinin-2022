console.log(new Date())



const newDate = new Date(2004,2,2,15,55,55, 5000);
console.log(newDate);

console.log('year', newDate.getFullYear());
newDate.getMonth();
console.log(newDate.getHours());

console.log(Date.now());

for (let i = 0; i < 100; i++){
    //
    console.log(1);
}

console.log(Date.now());