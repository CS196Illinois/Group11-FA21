import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonclassesComponent } from './commonclasses.component';

describe('CommonclassesComponent', () => {
  let component: CommonclassesComponent;
  let fixture: ComponentFixture<CommonclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonclassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
