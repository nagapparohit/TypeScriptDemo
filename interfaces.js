//for objects
var user = {
    fname: "",
    age: 10,
    walk: function () {
        return;
    }
};
//for classes
var EmployeeC = /** @class */ (function () {
    function EmployeeC() {
    }
    EmployeeC.prototype.walk = function () {
        throw new Error("Method not implemented.");
    };
    return EmployeeC;
}());
