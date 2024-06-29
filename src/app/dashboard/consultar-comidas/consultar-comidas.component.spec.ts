import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarComidasComponent } from './consultar-comidas.component';

describe('ConsultarComidasComponent', () => {
  let component: ConsultarComidasComponent;
  let fixture: ComponentFixture<ConsultarComidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarComidasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
