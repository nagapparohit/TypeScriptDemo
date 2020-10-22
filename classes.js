var Person = /** @class */ (function () {
    // firstName : string;
    // lastName : string;
    // age:number;
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = age;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + "  " + this.lastName;
    };
    return Person;
}());
var person = new Person("rohit", "nagappa", 28);
console.log(person.getFullName());
