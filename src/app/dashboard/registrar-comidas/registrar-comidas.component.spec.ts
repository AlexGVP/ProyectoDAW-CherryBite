import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarComidasComponent } from './registrar-comidas.component';

describe('RegistrarComidasComponent', () => {
  let component: RegistrarComidasComponent;
  let fixture: ComponentFixture<RegistrarComidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarComidasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
