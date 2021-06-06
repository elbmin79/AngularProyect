import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategypuzzlesComponent } from './strategypuzzles.component';

describe('StrategypuzzlesComponent', () => {
  let component: StrategypuzzlesComponent;
  let fixture: ComponentFixture<StrategypuzzlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategypuzzlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategypuzzlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
