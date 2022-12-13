function fibonacci(n) {
    let array = [];
    if (n == 0) {
        return array;
    }
    else if (n == 1) {
        return array[0];
    }
    else {
        array = [0, 1];
        for (let i = 2; i < n; i++) {
            let s = array.at(i - 2) + array.at(i - 1)
            array.push(s);
        }
        return array;
    }
}

let n = 9;
console.log(fibonacci(n));