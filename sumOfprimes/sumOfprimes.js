function sumPrimes(num){
    var a = [];
    for(var i=2;i<=num;i++){
        var count = 0;
        for(var j=1;j<=i;j++){
            if(i%j==0){
                count++;
            }
        }
        if(count==2){
            a.push(i);
        }
        console.log(a);
    }
    var sum = 0;
    for(var k=0;k<a.length;k++){
        sum += a[k];
    }
    console.log(sum);
    return sum;
}

sumPrimes(10);