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


