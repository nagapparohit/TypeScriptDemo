var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    Object.defineProperty(Person.prototype, "personFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getFullName = function () {
        return this.firstName + "  " + this.lastName;
    };
    return Person;
}());
var person = new Person("rohit", "nagappa", 28);
console.log(person.getFullName());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName, middleName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        _this.middleName = middleName;
        return _this;
    }
    Object.defineProperty(Employee.prototype, "employeeId", {
        get: function () {
            return this.id;
        },
        set: function (employeeId) {
            this.id = employeeId;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getFullName = function () {
        // const nameSegments : Array<string> = super.getFullName().split(' ');
        // nameSegments.splice(1,0,this.middleName);
        // const fullName = nameSegments.join(' ');
        return this.firstName + " " + this.middleName + " " + this.lastName;
    };
    return Employee;
}(Person));
var manager = new Employee(1, 'roht', 'nagappa', 'kumar', 28);
console.log(manager.getFullName());
var manager2 = new Employee(1, 'roht1', 'nagappa1', 'kumar1', 28);
manager2.employeeId = 22;
console.log(manager2.employeeId);
console.log(manager2.personFirstName);
