import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractComponent } from './pract.component';

describe('PractComponent', () => {
  let component: PractComponent;
  let fixture: ComponentFixture<PractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PractComponent]
    });
    fixture = TestBed.createComponent(PractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
