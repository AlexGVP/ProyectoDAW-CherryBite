import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularIMCComponent } from './calcular-imc.component';

describe('CalcularIMCComponent', () => {
  let component: CalcularIMCComponent;
  let fixture: ComponentFixture<CalcularIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcularIMCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcularIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
