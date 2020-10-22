var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
    }
    Person.prototype.getFullName = function () {
        return this.firstName + "  " + this.lastName;
    };
    return Person;
}());
var person = new Person("rohit", "nagappa", 28);
console.log(person.getFullName());
