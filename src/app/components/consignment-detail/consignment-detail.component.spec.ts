import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentDetailComponent } from './consignment-detail.component';

describe('ConsignmentDetailComponent', () => {
  let component: ConsignmentDetailComponent;
  let fixture: ComponentFixture<ConsignmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignmentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
