import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peticionesHTPP';

  constructor(
    private _htpp: HttpClient
  ){
    let form = new FormData();
    form.append('archivo', 'Hola');
    this._htpp.post('https://jsonplaceholder.typicode.com/posts', {
      datos:'hola'
    }).subscribe(data=>console.log(data),
    (error: HttpErrorResponse)=>{ 
       console.log('Error de red')
       console.log(error.status);
    },
    () => console.log('Petición finalizada')
    );
    /*El subscribe siempre pasa 3 parametros succes, error y el finaly o complet*/
    this._htpp.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      data=>console.log(data),
      (error: HttpErrorResponse)=>{ 
         console.log('Error de red')
         console.log(error.status);
      },
      () => console.log('Petición finalizada')
      );

    this._htpp.delete('https://jsonplaceholder.typicode.com/posts', {
      params:{
        id: '1'
      }
    }).subscribe(
      data=>console.log(data),
      (error: HttpErrorResponse)=>{ 
         console.log('Error de red')
         console.log(error.status);
      },
      () => console.log('Petición finalizada')
      );

    this._htpp.patch('https://jsonplaceholder.typicode.com/posts',{
      nuevo_nombre: 'Leonardo'
    }, {
      params:{
        id: '1'
      }
    }).subscribe(
      data=>console.log(data),
      (error: HttpErrorResponse)=>{ 
         console.log('Error de red')
         console.log(error.status);
      },
      () => console.log('Petición finalizada')
      );
  }
}
