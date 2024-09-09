import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getPracts(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  pract= [ 
    {
      id:'1',
      name: 'practice1'
    },
    {
      id:'2',
      name: 'practice2'
    },
    {
      id:'3',
      name: 'practice3'
    }
  ]



  


}
