type info={
    name:string;
    age:number;
    id:string
}
const Studernts:info ={
    name:"surafel",
    id:"23d",
    age:24
}
console.log("==================================== this is an object");
const results: void = (() => {
    console.log('====================================');
    console.log(Studernts);
    console.log('====================================');
})()


const name=(name:string)=>{
    return `Hello, ${name}!`;
}
