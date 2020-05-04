let persons1=[];
for(let i=0;i<3;++i){
    let info={name: "홍길동", age:16+i};
    Object.assign(persons1,info);
}
let persons2=persons1.slice(0);
persons1[0].age=20;
console.log(persons1);
console.log(persons2);