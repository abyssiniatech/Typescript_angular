type info={
    name:string;
    age:number;
    id:string
}
const Studernts:info ={
    name:"surafel",
    id:"23d",
    age:24,
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
var res=name("welcome ")
console.log('====================================');
console.log(name);
console.log('====================================');


class Employee {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

}
const employee1 = new Employee("John Doe", 123);
console.log('====================================');
console.log(employee1);
console.log('====================================');



// the second class 
class Car{
    make:string;
    year:number;
    color:string;
    constructor(make:string,year:number,color:string){
        this.make=make;
        this.year=year;
        this.color=color;
    }
    move():void{
        console.log(`${this.make} is moving.`);
    } 
}
const car1=new Car("Toyota",2020,"Red")
console.log('====================================');
console.log(car1);
car1.move();
console.log('====================================');