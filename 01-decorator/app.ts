
function Myloghger(target: Function){
console.log("loggin...");
console.log(target);
}

@Myloghger
class Person{
    name="joe"

    constructor(){
        console.log("hola desde mi objeto", this.name);
    }
}

const person = new Person()