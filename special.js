//void
var _this = this;
function logToConsole() {
    console.log("Hello world!!");
    return;
}
//Array
{
    var fruits = void 0;
    fruits = ["apple", 'orange', "grapes".toUpperCase(), (function () { return "bananda"; })()], null, undefined;
    var food = void 0;
    food = ['pizza', 'burger'];
    var genericArray = void 0;
    genericArray = ['pizza', 'burger', 122, true, false, 21, null, undefined];
    //tuple
    var coordinates = void 0;
    coordinates = [12, 3, 4];
    var genTuple = void 0;
    genTuple = [12, "rohit", true];
    //objects
    var user_1 = {
        firstName: 'sidd',
        lastname: 'ajmera',
        username: 'sideajmeraa',
        getUsername: function () { return _this.username; }
    };
    //enum
    var daysOfTheWeek = void 0;
    (function (daysOfTheWeek) {
        daysOfTheWeek["MONDAY"] = "monday";
        daysOfTheWeek["TUESDAY"] = "tuesday";
        daysOfTheWeek["WEDNESDAY"] = " wednesday";
    })(daysOfTheWeek || (daysOfTheWeek = {}));
    ;
    var today = void 0;
    today = daysOfTheWeek.MONDAY;
    today = daysOfTheWeek.TUESDAY;
    //any
    var authorizedUser = {
        firstName: 'roht',
        lastname: 'nagapps',
        username: 'rohitnagappa'
    };
}
