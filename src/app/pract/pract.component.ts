import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../services/practice.service';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-pract',
  templateUrl: './pract.component.html',
  styleUrls: ['./pract.component.scss']
})
export class PractComponent implements OnInit {

  pract$:Observable<any> | undefined;
  data: any[] = [];

  constructor(private practService: PracticeService) {}
  ngOnInit(): void {
   // this.pract$ = this.practService.getPracts();
  }


  loadData() {
    this.pract$ = this.practService.getPracts()
    .pipe(
      map((d)=> this.data = d),
      tap(()=>console.log(this.data))
    );
  }
  



}
