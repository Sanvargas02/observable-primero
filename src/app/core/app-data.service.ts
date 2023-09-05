import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  // HOT OBSERVABLE
  private message: BehaviorSubject<string> = new BehaviorSubject<string>('Hola');

  constructor(private httpClient: HttpClient) {

  }

  // COLD OBSERVABLE
  //Peticiones.
  //El HttpClient retorna un Observable que es por defecto COLD Observable.
  getPost():Observable<Post> {
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/todos/1`);
  }

  // HOT OBSERVABLE
  //Para recibir el valor actual del subject.
  get messageSubject(): Observable<string> {
    return this.message.asObservable(); // Ya podemos suscribirnos.
  }

  //Para cambiar el valor del subject.
  set editMessageSubject(newValue: string) {
    this.message.next(newValue);
  }

}
