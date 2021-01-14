var distinctArray = [2, 1, 1, 2, 3, 1];
var amoutOfDiferentNumbers = function (array) { return array.filter(function (elem, index, arr) { return arr.indexOf(elem) === index; }).length; };
console.log(amoutOfDiferentNumbers(distinctArray));
