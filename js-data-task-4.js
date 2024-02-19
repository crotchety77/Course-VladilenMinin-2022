function allowVisa(array){
    const sortedArray = array.filter((object) => {
        // Входная дата в формате "DD.MM.YYYY"
        let dateString = object.passportExpiration;

        // Разбиваем строку на составляющие
        let parts = dateString.split('.');
        let day = parseInt(parts[0], 10);
        let month = parseInt(parts[1], 10) - 1; // Месяц начинается с 0
        let year = parseInt(parts[2], 10);

        // Создаем объект Date
        let date = new Date(year, month, day);

        // Получаем количество миллисекунд, прошедших с начала эпохи (1 января 1970 года)
        let milliseconds = date.getTime();
        return object.criminalRecord === true && Date.now() < milliseconds});
    return sortedArray;
} 

const peopleWithVisa = [
    {
    firstName: 'Stasia',
    lastName: 'Ward',
    criminalRecord: true,
    passportExpiration: '19.06.2025',
    },
    {
    firstName: 'Elliot',
    lastName: 'Baker',
    criminalRecord: false,
    passportExpiration: '04.06.2023',
    },
    {
    firstName: 'Leighann',
    lastName: 'Scott',
    criminalRecord: true,
    passportExpiration: '31.07.2023',
    },
    {
    firstName: 'Nick',
    lastName: 'Pop',
    criminalRecord: true,
    passportExpiration: '31.12.2024',
    },
];
const result = allowVisa(peopleWithVisa);
console.log('result', result);