var array = [9, 3, 9, 3, 9, 7, 9];
// utilizei o slice para que o array original permaneça inalterado
var find_unique_number = function (array) {
    var repeatedNumbers = (array.filter(function (elem, index, arr) { return arr.indexOf(elem) !== index; })).join(",");
    return array.join("").replace(RegExp("[" + repeatedNumbers + "]", "ig"), "");
};
console.log(find_unique_number(array));

