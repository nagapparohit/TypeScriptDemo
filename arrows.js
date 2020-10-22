function greetUser(name) {
    console.log("welcome , " + name);
}
var greetUserByName = function (name) {
    console.log("welcome , " + name);
};
greetUser('rohit');
greetUserByName('nagappa');
var greetUserByNameArrow = function (name) { return console.log("welcome , " + name); };
greetUserByNameArrow('don');
var edibles = [
    {
        edible: 'pizza',
        isVegan: true
    },
    {
        edible: 'burger',
        isVegan: true
    },
    {
        edible: 'chicken pizza',
        isVegan: false
    },
    {
        edible: 'chicken burger',
        isVegan: false
    },
    {
        edible: 'tomato juice',
        isVegan: true
    }
];
console.log(edibles.filter(function (item) {
    return item.isVegan;
}));
console.log(edibles.filter(function (item) { return item.isVegan; }));
var user1 = {
    firstname: "john",
    lastname: "don",
    lazygreet: function () {
        var that = this;
        setTimeout(function () {
            console.log("hey there , " + that.firstname);
        }, 1000);
    }
};
var user2 = {
    firstname: "rohit",
    lastname: "don",
    lazygreet: function () {
        var _this = this;
        setTimeout(function () { return console.log("hey there , " + _this.firstname); }, 1000);
    }
};
user1.lazygreet();
user2.lazygreet();
