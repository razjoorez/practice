import { Component } from '@angular/core';
import { Tasks } from '../model/tasks';
import { TasksService } from '../services/tasks.service';
import { Observable, startWith, map} from 'rxjs';
import { FormControl, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

   taskForm!: FormGroup

   namesArray:String[] = [];
   filteredNames:String[] = []
   filteredVals = [];
   tasksArr :Tasks[] = [];
   tasks$ !: Observable<Tasks[]>;
  constructor(private tasksService: TasksService) {
    this.tasks$ = tasksService.getAllTask();
    tasksService.getAllTask().subscribe(
      tasks => {
      this.tasksArr = tasks,  
      console.log('temp arr:',this.tasksArr)
    
    })
         this.taskForm = new FormGroup({
          filter: new FormControl('filter')
        })

        //getting the names array form service
    this.tasksService.names$.subscribe(x => {console.log(x), this.namesArray = x, console.log('names array :', this.namesArray)});
    
     
   //this.tasksService.callApi$.subscribe(x=> console.log('api results', x))

   this.tasksService.mockApiCall$.subscribe();

    //  this.tasksService.results$.subscribe(x=> console.log('results: ', x))
     this.onChanges();
  }
  
  search =  new FormControl('init');
  


  onChanges() {

   // this.taskForm.get('filter')?.valueChanges.subscribe(x => {console.log('form value',x), this.getFullVal(x)});

    this.taskForm.get('filter')?.valueChanges.pipe(startWith('z'), map((value)=> this.getFullVal(value || ''))).subscribe();

    
  }


  getFullVal(value:string) {
    
    let filteredVal = value.toLocaleLowerCase();

    let result:String[] = this.namesArray.filter(x=> x.includes(filteredVal));
    console.log('initial result empty :',result)
    if(value === '') result =[];
      
this.filteredNames = result;
    console.log('get val :', value,'Results array: ',result);
    //this.taskForm.controls['search'].patchValue(result)


  }





  

}
