class Person{

    // firstName : string;
    // lastName : string;
    // age:number;

    constructor(
        private firstName:string,
        private lastName:string,
        private age:number
         ){
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = age;
    }

    getFullName():string{
        return `${this.firstName}  ${this.lastName}`;
    }

}

const person : Person = new Person("rohit","nagappa",28);

console.log(person.getFullName())