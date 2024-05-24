import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, mergeMap, of, switchMap, interval, from } from 'rxjs';
import { Tasks } from '../model/tasks';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }
 
  letters$:Observable<number> = of(1,2,3,4);
  taksArray: Tasks[] = [
    {
      Userid: 2,
      id: 3,
      title: 'mytitle1',
      completed: true,

    },
    {
      Userid: 3,
      id: 4,
      title: 'mytitle2',
      completed: true,

    },
    {
      Userid: 4,
      id: 5,
      title: 'mytitle3',
      completed: true,

    }
    
    
  ];
  mockTasks$:Observable<Tasks[]> = of(this.taksArray)
  
  // callApi$!:Observable<Tasks[]>;

  results$ =this.letters$.pipe(
    mergeMap(x=> interval(1000).pipe(map(x=> x+10)))
  );
 

  //procedural
    getAllTask():Observable<Tasks[]> {
      return this.http.get<Tasks[]>(this.url)
    }

    // getTask(): Observable<Tasks> {
    //   return this.http.get<Task>()
    // }

     greetPeople(greeting:string, ...names:string[]) {
      return greeting + ',' + names.join('and') + '!'
    }


    //declaritve

    tasks$ = this.http.get<Tasks[]>(this.url);
    
    getTaskOnN$!: Observable<Tasks[]>;
    private taskSubject = new Subject();
    taskSelectedAction$ = this.taskSubject.asObservable();

    selectedtaskChanged(id: string) {
      this.taskSubject.next(id);
    }

    requiredTask$:Observable<Tasks> = this.taskSelectedAction$.pipe(
      switchMap(id =>  this.http.get<Tasks>('url'+ id )
    ));


   private names = [ 'hello', 'how are u', 'weather', 'hot', 'cold'];
    names$:Observable<String[]> = of(this.names);
     
    

   callApi() {
    return this.letters$.pipe(mergeMap(x=> this.http.get<Tasks[]>(this.url+'/' + x)))
   }

   callApi$ = this.letters$?.pipe(mergeMap(x=> this.http.get<Tasks[]>(this.url+'/' + x)));


   mockApiCall$ = this.letters$?.pipe(
    mergeMap(x=> this.mockTasks$.pipe(
      map(y=> console.log('mock tasks: ',y))
    ))
   )
   
     


    

}
