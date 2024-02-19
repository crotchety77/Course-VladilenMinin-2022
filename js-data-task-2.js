function getDaysBeforeBirthday(nextBirthdayDate){
    const nowDate = Date.now();
    let days =  ((nextBirthdayDate.getTime() - nowDate) /1000/60/60/24);

    
    return days;
}

const nextBirthdayDate = new Date(2024,2,2);
getDaysBeforeBirthday(nextBirthdayDate);
console.log(getDaysBeforeBirthday(nextBirthdayDate));

