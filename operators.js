var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Array
{
    var fruits = ['apple', 'grape', 'mango'];
    var food = ['pizza', 'burgger'];
    var edibles = __spreadArrays(fruits, food);
    console.log(edibles);
    // object
    var user = {
        firstName: 'rohit',
        lastname: 'nagappa',
        username: 'rohitnagappa'
    };
    var userDetails = __assign(__assign({}, user), { address: '123 East ', email: 'nag@gmail.com' });
    console.log('got the user as : ', userDetails);
    //functions
    function add(x, y, z) {
        return x + y + z;
    }
    var numbers = [1, 2, 3];
    console.log("got the sum of all the numbers : ", add.apply(void 0, numbers));
    //backticks
    console.log('the user with name : '
        + user.firstName
        + ' has an address of '
        + userDetails.address
        + ' and email is '
        + userDetails.email);
    console.log("The user with name : " + user.firstName + " has an address of " + userDetails.address + " and an email of " + userDetails.email);
    console.log("Got the userdetial " + userDetails);
    console.log("Got the userdetial ", userDetails);
    //destructure
    var fName = user.firstName, lName = user.lastname;
    console.log(fName);
    console.log(lName);
    //array desturcture
    var apple = fruits[0], mango = fruits[1];
    console.log(apple);
    console.log(mango);
    //Rest parameter
    var jsutApple = edibles[0], restEdibles = edibles.slice(1);
    console.log("just apple : ", jsutApple);
    console.log("rest of edibles : ", restEdibles);
    var firstName = userDetails.firstName, restUserDetials = __rest(userDetails, ["firstName"]);
    console.log("first name is :", firstName);
    console.log(" rest user props :", restUserDetials);
    function getEdibles(apple) {
        var restEdibles = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restEdibles[_i - 1] = arguments[_i];
        }
        console.log("in function", apple);
        console.log("in function", restEdibles);
    }
    getEdibles.apply(void 0, edibles);
}
