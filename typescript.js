var sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 5));
// boolean
var isCool = true;
// number 
var age = 33;
// string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old, I'm only " + 2;
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// object
var wizzard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeSize = Size.Small;
// Any type !!!!!!! be careful
var whatever = 'buahahahahah';
whatever = 2;
whatever = null;
// void
var sing = function () {
    console.log("la la laaa");
};
// never
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log("Fight");
};
var fightRobotArmy2 = function (robots) {
    console.log('Fight');
};
