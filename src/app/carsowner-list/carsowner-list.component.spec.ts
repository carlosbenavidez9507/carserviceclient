import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsownerListComponent } from './carsowner-list.component';

describe('CarsownerListComponent', () => {
  let component: CarsownerListComponent;
  let fixture: ComponentFixture<CarsownerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsownerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsownerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
