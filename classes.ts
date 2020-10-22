class Person{

    // firstName : string;
    // lastName : string;
    // age:number;

    constructor(
        protected  firstName:string,
        protected   lastName:string,
        protected   age:number
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

class Employee extends Person{

    constructor(
        private id:number,
        firstName:string,
        lastName:string,
        private middleName: string,
        age:number
    ){
        super(firstName,lastName,age);
    }

    getFullName():string{
            // const nameSegments : Array<string> = super.getFullName().split(' ');
            // nameSegments.splice(1,0,this.middleName);

            // const fullName = nameSegments.join(' ');

            return `${this.firstName} ${this.middleName} ${this.lastName}`;


    }
   
}


const manager : Person = new Employee(1,'roht','nagappa','kumar',28);

console.log(manager.getFullName());