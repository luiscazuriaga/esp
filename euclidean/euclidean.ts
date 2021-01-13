const euclideanAlgorithm = (N, M) => {
    let a = N
    let b = M
    while (b != 0) {
        let resto = b
        b = a % b
        a = resto
    }
    return N / a
}

console.log(euclideanAlgorithm(10, 4))
console.log(euclideanAlgorithm(5, 2))
console.log(euclideanAlgorithm(7, 3))
console.log(euclideanAlgorithm(20, 5))
console.log(euclideanAlgorithm(10, 3))
console.log(euclideanAlgorithm(4, 2))

