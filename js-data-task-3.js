function addDays (date, days = 1){
    daysToTimestamp = days * 24*60*60*1000;
    newDate = new Date(date.getTime() + daysToTimestamp);
    return newDate;
}

date = new Date();
console.log(date);

console.log(addDays(date,100));