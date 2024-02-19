let dayMonthYear = (date, separator = '.') => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth()+1).toString().padStart(2, '0'); // Месяц начинается с 0;
    const year = date.getFullYear();
    return [day, month, year].join(separator);
};

let data1 = new Date();


console.log(dayMonthYear(data1, "+"));
console.log(dayMonthYear(data1));