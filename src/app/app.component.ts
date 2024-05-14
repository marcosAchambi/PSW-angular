import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ProductComponent} from "./components/product/product.component";
import {BoardP2Component} from "./components/board-p2/board-p2.component";
import {  initFlowbite} from "flowbite";


import {
  CartProductComponent
} from "./components/cart-product/cart-product.component";
import {
  Product
} from "./models/product";
import {
  DialogAnimationsExampleDialog
} from "./components/board-p2/modal";
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  TicketP5Component
} from "./components/ticket-p5/ticket-p5.component";
import {
  TicketListP5Component
} from "./components/ticket-list-p5/ticket-list-p5.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ProductComponent, CartProductComponent, BoardP2Component, DialogAnimationsExampleDialog, MatFormFieldModule, TicketP5Component, TicketListP5Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-angular';
  cart!: Product[];
  constructor() {
  }
  ngOnInit(): void {
    initFlowbite();
  }
}
