let a=[];
let Max=100;
let Min=1;
for(let i=0;i<100;++i){
    a[i]=Math.floor(Math.random()*(Max-Min+1)+Min);
    a.reverse();
}

console.log(a);