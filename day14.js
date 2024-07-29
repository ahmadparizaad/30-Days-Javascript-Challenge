// class person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hello ${this.name}, you are ${this.age} years old`)
//     }
//     generalGreet(){
//         console.log('Good Morning');
//     }
//     updateAge(age){
//         this.age = age;
//         console.log(`Your age is updated to ${age}`);
//     }
    
//     get name(){
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set name(name){
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// }

// // let person1 = new person('Ahmad', 21)
// // let person2 = new person('Ali', 22)
// // person1.greet(person1.name, person1.age)
// // person1.updateAge(20)

// class student extends person{
//     static studentCount = 0;
//     constructor(firstName, lastName, age, studentId){
//         super(firstName, lastName, age);
//         this.studentId = studentId;
//         student.studentCount++;
//     }

//     returnID(){
//         console.log(`Your student ID is ${this.studentId}`);
//     }

//     greet(){
//         console.log(`Hello ${this.firstName} ${this.lastName}, you are ${this.age} years old and your student ID is ${this.studentId}.`);
//     }

//     static genericGreet(){
//         console.log('Good Morning Student');
//     }

//     static getStudentCount(){
//         console.log(`The total number of students is ${this.studentCount}`);
//     }
// }

// let student1 = new student('Mohammad', 'Ahmad', 21, 1234)
// let student2 = new student('Md', 'Ahmad', 20, 1324)

// student.genericGreet()
// student1.returnID()
// student1.greet()
// student2.greet()
// student.getStudentCount()
// console.log(student1.name);
// student1.name = 'Md Ahmad'
// console.log(student1.name);

class Account{
    #balance = 0;
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.greet()
    }

    get balance(){
        return `Balance: ${this.#balance}`;
    }

    greet(){
        return `Hello ${this.name}, your account ID is ${this.id}`;
        }
    deposit(amount){
        if (amount>0){
        this.#balance += amount;
        return `Rs ${amount} credited, new balance is Rs ${this.#balance}`;
    }
    }

    withdraw(amount){
        if (amount <= this.#balance){
            this.#balance -= amount;
            return `Rs ${amount} debited, new balance is Rs ${this.#balance}`;
        }
    }
}

const account1 = new Account('Ahmad', 1)
console.log(account1.greet());
console.log(account1.balance);
console.log(account1.deposit(100));
console.log(account1.withdraw(40));