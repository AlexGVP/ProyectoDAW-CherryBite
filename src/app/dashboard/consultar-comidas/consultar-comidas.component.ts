import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { CommonModule } from '@angular/common';
import { ConsultarAlimentosService } from './consultar-comidas.service';
import { ConsultarAlimentor } from './consultar-comidas';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-consultar-comidas',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './consultar-comidas.component.html',
  styleUrl: './consultar-comidas.component.css'
})
export class ConsultarComidasComponent implements OnInit{
  displayedColumns: string[] = ['nombre', 'fecha', 'imagen', 'cantidad'];

  consultar : ConsultarAlimentor[] = []

  constructor(private consultarService: ConsultarAlimentosService,){}

  ngOnInit(): void {
    this.consultarService.getAllDato().pipe(
      map((data: ConsultarAlimentor[]) => data.filter(item => Number(item.idusuarioUsuario) === 1))
    ).subscribe((filteredData) => {
      this.consultar = filteredData;
    });
  }
  
}