function  giveJobToStudent(student, jobName){
//     “Поздравляем! У
// студента fullName появилась новая работа! Теперь он jobName”, где fullName - это имя
// студента, а jobName - название новой работы студента.

    console.log(`Поздравляем! У студента ${student['fullName']} появилась новая работа! Теперь он ${jobName}`);


    student['job'] = jobName;
    

    // Не меняет объект. Просто добавляет новый ключ: ...
    // return {
    //     ...student,
    //     job: jobName,
    // }

    return student;
}
const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}
const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log(student);
/*
updatedStudent = {
fullName: 'Максим',
experienceInMonths: 12,
stack: ['HTML', 'CSS', 'JavaScript', 'React'],
job: 'веб-разработчик',
}
*/