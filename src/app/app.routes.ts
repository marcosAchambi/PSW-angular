import { Routes } from '@angular/router';
import {
  ProductComponent
} from "./components/product/product.component";
import {
  BoardP2Component
} from "./components/board-p2/board-p2.component";
import {
  TicketP5Component
} from "./components/ticket-p5/ticket-p5.component";
import {
  TicketListP5Component
} from "./components/ticket-list-p5/ticket-list-p5.component";


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
