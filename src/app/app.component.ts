import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ProductComponent} from "./components/tp-angular/product/product.component";
import {BoardP2Component} from "./components/tp-angular/board-p2/board-p2.component";
import {  initFlowbite} from "flowbite";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import {
  CartProductComponent
} from "./components/tp-angular/cart-product/cart-product.component";
import {
  Product
} from "./models/tp-angular/product";
import {
  DialogAnimationsExampleDialog
} from "./components/tp-angular/board-p2/modal";
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  TicketP5Component
} from "./components/tp-angular/ticket-p5/ticket-p5.component";
import {
  TicketListP5Component
} from "./components/tp-angular/ticket-list-p5/ticket-list-p5.component";
import {
  TranslatorComponent
} from "./components/translator/translator.component";
import {
  CalendarComponent
} from "./components/calendar/calendar.component";
import {
  IpInfoComponent
} from "./components/ip-info/ip-info.component";
import {
  NewsComponent
} from "./components/news/news.component";
import {
  RecetasComponent
} from "./components/recetas/recetas.component";
import {
  CarComponent
} from "./components/car/car.component";
import {
  YoutubeService
} from "./services/youtube.service";
import {
  YoutubeComponent
} from "./components/youtube/youtube.component";
import {
  AmazonComponent
} from "./components/amazon/amazon.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslatorComponent,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    IpInfoComponent,
    NewsComponent,
    RecetasComponent,
    CarComponent,
    YoutubeComponent,
    AmazonComponent
  ],
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
