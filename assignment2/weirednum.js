findDivisors = (n)=>{
    let divisors = [1]
    for (let i = 2; i <= n/2; i++) {
        if(n%i == 0){
            divisors.push(i)
        }
    }
    return divisors
}

checksubset = (set,n,sum)=>{
    if(sum == 0)
        return true;
    if(n == 0 && sum != 0)
        return false;
    
    return checksubset(set,n-1,sum) || checksubset(set,n-1,sum - set[n-1])

}

checkCondition1 = (n)=>{
    let divisors = findDivisors(n);
    let sum = 0;
    divisors.forEach(element => {
        sum += element
                
    });
    if(sum>n){
        if(checksubset(divisors,divisors.length,n) == false){
            console.log(n)
        }
    }
}

for (let i = 1; i < 1000; i++) {
    checkCondition1(i)    
}
