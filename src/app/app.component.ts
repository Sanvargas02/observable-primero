import { Component } from '@angular/core';
import { AppDataService } from './core/app-data.service';
import { Observable } from 'rxjs';
import { Post } from './common/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //COLD OBSERVABLE
  public postData$!: Observable<Post>; // ? -> para que no sea necesario inicializar y ! -> para que se inicialize antes de su ejecución.

  //HOT OBSERVABLE
  public subjectMessage$!: Observable<string>;
  public subject: string = "";

  //Aquí se inicializan las propiedades declaradas anteriormente
  constructor(private appDataService: AppDataService) {

    //COLD OBSERVABLE
    // this.appDataService.getPost().subscribe((content:Post) => { //Esto imprime el contenido del Observable
    //   console.log(content);
    // })
    this.postData$ = this.appDataService.getPost(); //Esto guarda el Observable pero no muestra nada aún

    //HOT OBSERVABLE
    this.subjectMessage$ = appDataService.messageSubject; //Como es un get no se utiliza paréntesis de función
    // this.subjectMessage$.subscribe( text => {
    //   console.log(text);
    // });
  }

  //HOT OBSERVABLE
  updateSubject() {
    this.appDataService.editMessageSubject = this.subject;
  }

}
