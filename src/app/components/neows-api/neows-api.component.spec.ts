import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeowsApiComponent } from './neows-api.component';

describe('NeowsApiComponent', () => {
  let component: NeowsApiComponent;
  let fixture: ComponentFixture<NeowsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeowsApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeowsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
