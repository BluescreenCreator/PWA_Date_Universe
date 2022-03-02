import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydatesComponent } from './mydates.component';

describe('MydatesComponent', () => {
  let component: MydatesComponent;
  let fixture: ComponentFixture<MydatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
