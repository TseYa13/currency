import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product";
import { AppComponent } from "src/app/app.component";

@Component({
    selector: 'app-product',
    templateUrl: "../product.component.html",
    styleUrls: ["product.component.css"]
})
export class ProductComponent  {
    @Input() product: IProduct
    

}