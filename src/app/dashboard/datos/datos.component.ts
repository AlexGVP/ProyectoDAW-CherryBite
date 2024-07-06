import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { CommonModule } from '@angular/common';
import { DatosService } from './datos.service';
import { Dato } from './dato';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent implements OnInit{
  displayedColumns: string[] = ['titulo', 'descripcion', 'imagen'];
  dato : Dato[] = []

  constructor(private datosService: DatosService,){}

  ngOnInit(): void {
    this.datosService.getAllDato().subscribe((data) => {
      console.log(data);
      this.dato = data;
    });
  }
}