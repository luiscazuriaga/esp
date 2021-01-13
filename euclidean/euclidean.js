const euclideanAlgorithm = (N, M) => {
    let array = [0];
    let oldNumber = 0;
    let counter = 0;
    for (let i in Array(N - 1).fill(0)) {
        array.push((oldNumber + M) % N);
        oldNumber = array[i];
    }
    return array.filter((elem, index, arr) => arr.indexOf(elem) === index).length;
};
console.log(euclideanAlgorithm(10, 4));
console.log(euclideanAlgorithm(5, 2));
console.log(euclideanAlgorithm(7, 3));
console.log(euclideanAlgorithm(20, 5));
console.log(euclideanAlgorithm(10, 3));
console.log(euclideanAlgorithm(4, 2));
//# sourceMappingURL=euclidean.js.map