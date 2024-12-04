import { Component } from "@angular/core";
import { InformationComponent } from "./information";
import { ProductComponent } from "./product/product.component";

@Component({
    selector: "mi-root",
    templateUrl: './app.component.html',
    imports:[InformationComponent, ProductComponent],
    standalone:true,
    styles: ['h1 {color:red}']

})

export class AppJ{

}