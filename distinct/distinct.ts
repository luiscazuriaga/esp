const distinctArray = [2, 1, 1, 2, 3, 1]

const amoutOfDiferentNumbers = (array: Array<number>) => [...new Set(array)].length


console.log(amoutOfDiferentNumbers(distinctArray))