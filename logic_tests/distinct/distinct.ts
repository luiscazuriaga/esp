const distinctArray = [2, 1, 1, 2, 3, 1]

const amoutOfDiferentNumbers = (array: Array<number>) => array.filter((elem, index, arr) => arr.indexOf(elem) === index).length


console.log(amoutOfDiferentNumbers(distinctArray))