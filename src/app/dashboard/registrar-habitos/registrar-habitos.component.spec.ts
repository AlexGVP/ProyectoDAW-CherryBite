import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHabitosComponent } from './registrar-habitos.component';

describe('RegistrarHabitosComponent', () => {
  let component: RegistrarHabitosComponent;
  let fixture: ComponentFixture<RegistrarHabitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarHabitosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarHabitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
