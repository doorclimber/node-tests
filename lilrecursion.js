function findAdditionToN(n) {
    if (n === 0) {
        return 0;
    }
    else {
        return n + findAdditionToN(n-1);
    }
}

console.log(findAdditionToN(1000));