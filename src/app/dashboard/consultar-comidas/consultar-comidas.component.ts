import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-consultar-comidas',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './consultar-comidas.component.html',
  styleUrl: './consultar-comidas.component.css'
})
export class ConsultarComidasComponent {
  constructor(){
  }
}