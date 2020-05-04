let a=[];
let sum=0;
for(let i=0;i<100;++i){
    a[i]=Math.random()*100+1;
    if(a[i]%2==0){
        sum=sum+a[i];
        console.log(sum);
    }
}
