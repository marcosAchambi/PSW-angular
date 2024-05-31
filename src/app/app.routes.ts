import { Routes } from '@angular/router';
import {
  ProductComponent
} from "./components/tp-angular/product/product.component";
import {
  BoardP2Component
} from "./components/tp-angular/board-p2/board-p2.component";
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
  YoutubeComponent
} from "./components/youtube/youtube.component";
import {
  AmazonComponent
} from "./components/amazon/amazon.component";


export const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'punto2',
    component: BoardP2Component,
  },
  {
    path:'punto5',
    component: TicketP5Component
  },
  {
    path: 'lista-tickets',
    component: TicketListP5Component
  },
  {
    path: 'editar-ticket/:id',
    component: TicketP5Component
  },
  {
    path: 'translator',
    component: TranslatorComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path:'ipInfo',
    component: IpInfoComponent
  },
  {
    path:'news',
    component: NewsComponent
  },
  {
    path:'recetas',
    component: RecetasComponent
  },
  {
    path: 'cars',
    component: CarComponent
  },
  {
    path:'youtube',
    component: YoutubeComponent
  },
  {
    path:'amazon',
    component: AmazonComponent
  }

  // },
  // {
  //   path: '',
  //   redirectTo: '/product',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   redirectTo: '/product'
  // }
];
