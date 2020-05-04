function sum(a,b){
    for(let i=0;i<a.length;++i){
        b=a[i]+b;
    }
    return b;
}
function test_sum(){
    let a=[];
    for(let i=0;i<5;++i){
        a[i]=Math.floor(Math.random()*(10-1+1)+1);
    }
    console.log(a);
    return a;
}
let t=test_sum();
console.log(t);
console.log(t);
console.log(t);
console.log(t);
console.log(t);