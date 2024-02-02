const users = [
    {
    username: 'David',
    status: 'online',
    lastActivity: 10
    },
    {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
    },
    {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
    }
]
// Вам необходимо создать новый массив onlineUsers, который будет содержать объекты
// только тех пользователей, у которых status равен “online”.
// После выведите через alert сообщение “Сейчас в онлайн следующие пользователи:
// usersOnlineNames”, где usersOnlineNames - строка, в которой имена пользователей
// отображаются через запятую.
// Для кода выше результат должен быть следующим: “Сейчас в онлайн следующие
// пользователи: David, Bob”.

let onlineUsers = [];
// console.log(users);
users.forEach(object => {
    if (object.status == 'online'){
        onlineUsers.push(object);
    }
});
console.log(onlineUsers);