var pet = "dog";
function setPet() {
    var pet = "cat";
    console.log("pet in the house : " + pet);
}
setPet();
console.log("pet outside the house : " + pet);
var index = 0;
console.log("index outside the loop , before for loop " + index);
for (var index = 0; index < 5; index++) {
    console.log("index inside the loop " + index);
}
console.log("index outside the loop " + index);
