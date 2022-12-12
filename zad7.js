function isHappyNumber(n){
    array = [];

    let temp = n;

    while (!array.includes(temp)){
        array.push(temp);

        let digits = [];
        while(temp!==0){
            digits.push(temp%10);
            temp = parseInt(temp/=10);
        }
        let sum = 0;
        for(let i=0; i<digits.length; i++){
            sum += digits.at(i) * digits.at(i);
        }
        if(sum === 1) return true;
        temp = sum;
    }
    return false;
}

console.log(isHappyNumber(19));