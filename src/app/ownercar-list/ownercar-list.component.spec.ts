import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnercarListComponent } from './ownercar-list.component';

describe('OwnercarListComponent', () => {
  let component: OwnercarListComponent;
  let fixture: ComponentFixture<OwnercarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnercarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnercarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
