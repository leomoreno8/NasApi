import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodApiComponent } from './apod-api.component';

describe('ApodApiComponent', () => {
  let component: ApodApiComponent;
  let fixture: ComponentFixture<ApodApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApodApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
