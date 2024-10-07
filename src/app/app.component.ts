import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { Observable, from, fromEvent } from 'rxjs';
import { TasksService } from './services/tasks.service';
import { Tasks } from './model/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,OnInit {
  constructor(private taskservice: TasksService){
    this.taskservice.getrequieed;

  }
  //concattaks$= this.taskservice.getrequieed
documentClick$ = fromEvent(document, 'click');
  chosenTask: Tasks[] | undefined;
  title = 'practice';
  tasks$:Observable<Tasks[]> | undefined;
  //static:true  child component is always there, not wrapped in ngoninit
  @ViewChild(ChildComponent, {static: true}) child?: ChildComponent;

  //better not to brut force child increment and use elementref
  @ViewChild('button', {static: true}) buttonRef!:ElementRef<HTMLButtonElement>;


  @ViewChild('buton')button!: any;
 // clicks$:Observable<any> | undefined;

  //getting reference to all child components
  @ViewChildren (ChildComponent) children? : QueryList<ChildComponent>;

  //get a ref to all buttons inside current component
  @ViewChildren('button') buttonRefs?:QueryList<ElementRef<HTMLButtonElement>>;

  //buttonClick$ = fromEvent(this.buttonRef.nativeElement,'click');

  ngAfterViewInit(): void {
    if(this.buttonRef?.nativeElement) {
      this.buttonRef.nativeElement.innerHTML = 'fooo';
    }

    this.children?.forEach(child=> console.log(child));
  }
  clikeme = document.getElementById('click-me');

  ngOnInit(): void {

    this.documentClick$.subscribe(e=> console.log(e))
    // this.clicks$ = fromEvent(this.button.nativeElement, 'click');
    // this.clicks$.subscribe((e)=> {
    //   console.log(e)
    // })


    
    // fromEvent(document.getElementById("click-me"), "click").subscribe(x =>
    //   console.log(x)
    // );
   
  }
  increment() {
    console.log(this.child);
    this.child?.increment();
  }
getthree(id:number) {
 this.chosenTask= this.taskservice.getTask(3);
 console.log('chosen task: ', this.chosenTask);
 this.getThreeObs(id);
}

getThreeObs(id:number) {
  this.tasks$ = this.taskservice.getTaskObs(id);
  this.taskservice.getrequieed;
}

}
