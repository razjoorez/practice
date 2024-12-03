import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

const routes: Routes = [
  {path:'tasks', component: TasksComponent},
  {path: 'counter', component:MyCounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
