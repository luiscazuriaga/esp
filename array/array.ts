const array = [9, 3, 9, 3, 9, 7, 9]

// utilizei o slice para que o array original permaneça inalterado
const find_unique_number = (array: Array<number>) => {
    let repeatedNumbers = (array.filter((elem, index, arr) => arr.indexOf(elem) !== index)).join(",")

    return array.join("").replace(RegExp(`[${repeatedNumbers}]`, "ig"), "")
}

console.log(find_unique_number(array))

const array2 = [9, 3, 9, 3, 9, 7, 9, 9, 3, 9, 3, 3, 3, 4, 4, 5, 6, 5, 6, 5, 6, 5, 11, 7]

console.log(find_unique_number(array2))