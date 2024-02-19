// this - текущий контекст выполнения кода - object
// console.log(this); //window глобальный объект // global для NodeJS

const user = {
    name: "Andrey",
    dateOfBirth: 2004,
    getName(){
        // return user.name 
        //плох т.к. не является универсальным
        //если использовать для других объектов

        return this.name;
    },
    calculateAge(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.dateOfBirth;
    },
    getAllInfo: function(){
        const age = this.calculateAge();
        console.log(this.name, age);
    }
}

// console.log(user.getName());
// console.log(user.calculateAge());
// user.getAllInfo();

// bind, call, apply


// Можем заменить this 

// call

const user2 = {
    name: 'Igor',
};

console.log(user.getName.call(user2));