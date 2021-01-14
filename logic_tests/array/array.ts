const array = [9, 3, 9, 3, 9, 7, 9]

// utilizei o slice para que o array original permaneça inalterado
const find_unique_number = (array: Array<number>) => {
    let repeatedNumbers = (array.filter((elem, index, arr) => arr.indexOf(elem) !== index)).join(",")

    return array.join("").replace(RegExp(`[${repeatedNumbers}]`, "ig"), "")
}
