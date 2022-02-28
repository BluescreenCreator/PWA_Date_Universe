import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesmainComponent } from './datesmain.component';

describe('DatesmainComponent', () => {
  let component: DatesmainComponent;
  let fixture: ComponentFixture<DatesmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
