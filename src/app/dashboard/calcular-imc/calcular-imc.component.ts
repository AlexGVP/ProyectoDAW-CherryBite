import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';

@Component({
  selector: 'app-calcular-imc',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './calcular-imc.component.html',
  styleUrl: './calcular-imc.component.css'
})
export class CalcularIMCComponent {
  calcularImc(txtaltura: HTMLInputElement, txtpeso: HTMLInputElement) {
    const altura = parseFloat(txtaltura.value);
    const peso = parseFloat(txtpeso.value);

    if (altura > 0 && peso > 0) {
      const alturaMetros = altura / 100;
      const imc = peso / (alturaMetros * alturaMetros);

      let diagnostico = "";
  
    if (imc <= 18.5) {
      diagnostico = "Por debajo de lo normal";
    } else if (imc <= 24.9) {
      diagnostico = "Peso normal";
    } else if (imc <= 29.9) {
      diagnostico = "Sobrepeso";
    } else if (imc <= 34.9) {
      diagnostico = "Obesidad leve";
    } else if (imc <= 39.9) {
      diagnostico = "Obesidad";
    } else {
      diagnostico = "Obesidad extrema";
    }
      alert(`Tu IMC es: ${imc.toFixed(2)} - ${diagnostico}`);
    } else {
      alert('Por favor ingresa valores válidos para altura y peso.');
    }
  }
}