import { Component } from '@angular/core';
import { AppDataService } from '../core/app-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.css']
})
export class SubComponentComponent {

  //HOT OBSERVABLE
  public subjectMessage$!: Observable<string>;

  //Aquí se inicializan las propiedades declaradas anteriormente
  constructor(private appDataService: AppDataService) {

    //HOT OBSERVABLE
    this.subjectMessage$ = appDataService.messageSubject; //Como es un get no se utiliza paréntesis de función

  }

}
