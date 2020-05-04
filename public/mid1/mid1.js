let a=[];
let Max=100;
let Min=1;
let b=0;
for(let i=0;i<100;++i){
    a[i]=Math.random()*Max+Min;
    b=a[i]+b;
}
console.log((b/100).tofixed(1));
