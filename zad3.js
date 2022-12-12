function range(a, b){
    let beg = a;
    let res = [];
    for(let i = a; i<=b; i++){
        res.push(i);
    }
    return res;
}

console.log(range(1,4));