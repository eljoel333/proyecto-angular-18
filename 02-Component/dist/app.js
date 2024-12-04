"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Component(options) {
    return (target) => {
        const instance = new target();
        console.log("componente creado con:", options);
        const ref = document.querySelector(options.selector);
        if (ref) {
            ref.innerHTML = options.template;
            ref.querySelector("h1").textContent += ", " + instance.name;
        }
        else {
            console.error("no se encontro el selector");
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "joel";
        this.age = 25;
        console.log("hola, soy: ", this.name);
    }
};
Person = __decorate([
    Component({
        selector: "#root",
        template: "<h1>Hola mundo</h1>"
    }),
    __metadata("design:paramtypes", [])
], Person);