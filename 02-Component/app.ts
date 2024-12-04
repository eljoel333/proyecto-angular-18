function Component(options: {selector:string; template: string}){
    return (target: new (...args: any[])=>any)=>{
        const instance = new target();

        console.log("componente creado con:", options);

        const ref = document.querySelector(options.selector);

        if(ref){
           ref.innerHTML = options.template;
           ref.querySelector("h1")!.textContent += ", " + instance.name;
        }
        else{
            console.error("no se encontro el selector");
        }

    };
}

@Component({
    selector: "#root",
    template : "<h1>Hola mundo</h1>"
})
class Person{
    name ="joel";
    age = 25;

    constructor(){
        console.log("hola, soy: ", this.name)
    }
}