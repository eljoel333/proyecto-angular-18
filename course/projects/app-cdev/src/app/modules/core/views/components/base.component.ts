import { inject } from "@angular/core";
import { LayoutService } from "../../../../../../../app-cdev-lib/src/public-api";

export abstract class BaseComponent{
    abstract title: string;
    abstract icon: string

    private readonly layoutService = inject(LayoutService)

    constructor() {
        this.layoutService.changeConfigLayout({
          showHeader:true,
          showMenu:true,
        })
       }
    
    }
    