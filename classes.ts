class Person{

    firstName : string;
    lastName : string;
    age:number;

    constructor(firstName:string,lastName:string,age:number){

    }

    getFullName():string{
        return `${this.firstName}  ${this.lastName}`;
    }

}

const person : Person = new Person("rohit","nagappa",28);

console.log(person.getFullName())