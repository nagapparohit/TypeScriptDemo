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

    get personFirstName():string{
        return this.firstName;
    }
    getFullName():string{
        return `${this.firstName}  ${this.lastName}`;
    }

}

const person : Person = new Person("rohit","nagappa",28);

console.log(person.getFullName())

class Employee extends Person{

    get employeeId():number {
        return this.id;
    }

    
    set employeeId(employeeId:number){
        this.id =employeeId;
    }
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

const manager2 : Employee = new Employee(1,'roht1','nagappa1','kumar1',28);

manager2.employeeId = 22;

console.log(manager2.employeeId);
console.log(manager2.personFirstName);



