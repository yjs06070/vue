function sum(c,b){
    for(let i=0;i<c.length;++i){
        b=c[i]+b;
    }
    return b;
}
function test_sum(){
    let a=[];
    for(let i=0;i<5;++i){
        a[i]=Math.floor(Math.random()*(10-1+1)+1);
    }
    console.log(a);
    a = sum([]);
    return a;
}
setTimeout(test_sum,1000);
setTimeout(test_sum,1000);
setTimeout(test_sum,1000);
setTimeout(test_sum,1000);
setTimeout(test_sum,1000);