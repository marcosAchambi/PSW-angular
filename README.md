# TpAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Nueva sintaxis de Angular 17
> Angular 17 introduce una nueva sintaxis para la directiva `ngFor` que permite seguir objetos en lugar de índices.


          @for (p of products; track product ){
                ...
            <div>{{p.name}}</div>
                ...
          }


La directiva `track` se utiliza para indicar a Angular que debe seguir el objeto `product` en lugar de seguir el índice del bucle. Esto es útil cuando se trabaja con objetos que pueden cambiar de posición en el array, como por ejemplo cuando se ordena la lista de productos por precio.
Antes:

            <div *ngFor="let p of products; let i = index">
                <div>{{p.name}}</div>
            </div>
**ejemplo de product.componet**

## Cambiar estado sin usar el método
> Angular 17 introduce una nueva forma de cambiar el estado de un componente sin tener que utilizar el método `setState`.
 En lugar de utilizar el método `setState`, se puede utilizar la directiva `state` para cambiar el estado de un componente.

Antes: 
 
    export class HeaderComponent {
        isMobileMenu: boolean = false;
        toggleMobileMenu() {
        this.isMobileMenu = !this.isMobileMenu;
        }
    }
    <button type="button" (click)="toggleUserMenu()" >Abrir
    </button>

Ahora:

    export class HeaderComponent {
        isMobileMenu: boolean = false;
    }
    <button type="button" (click)="isMobileMenu = true" >Abrir
    </button>

**ejemplo de header.componet**

## Comunicación entre componente padre e hijo
> Angular 17 introduce una nueva forma de comunicación entre un componente padre y un componente hijo utilizando la directiva `@Input` y la directiva `@Output`.
 La directiva `@Input` se utiliza para pasar datos desde un componente padre a un componente hijo.

        export class ProductComponent {
            @Input() product: Product;
        }
        <app-product [product]="product"></app-product>
**ejemplo de product.componet**


## Formatos solicitudes http

>  HttpParams para construir el cuerpo de la solicitud POST. Esto es útil cuando la API espera recibir los datos en formato application/x-www-form-urlencoded, que es esencialmente una cadena de consulta codificada.


´´´
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

// ...

const body = new HttpParams()
.set('q', text)
.set('target', target)
.set('source', source);

const httpOptions = {
headers: new HttpHeaders({
'x-rapidapi-key': 'your-rapidapi-key',
'x-rapidapi-host': 'google-translatelp.rapidapi.com',
'Content-Type': 'application/x-www-form-urlencoded'
}),
};

return this._http.post('https://google-translatelp.rapidapi.com/language/translate/v2', body.toString(), httpOptions);
´´´

> FormData para construir el cuerpo de la solicitud POST. Esto es útil cuando la API espera recibir los datos en formato multipart/form-data, que es esencialmente un formulario HTML.

´´´
getIpInfo(ip:string): Observable<any> {
const httpOptions = {
headers: new HttpHeaders({
'x-rapidapi-key': '36c3c902e4mshd611dd0973a3d42p1af69djsnb5e312555d5b',
'x-rapidapi-host': 'community-neutrino-ip-info.p.rapidapi.com',
'Content-Type': 'application/json'
}),
};

    const body = {
      ip: ip,
      'reverse-lookup': 'checked'
    };

    return this._http.post('https://community-neutrino-ip-info.p.rapidapi.com/ip-info', body, httpOptions);
}
´´´
