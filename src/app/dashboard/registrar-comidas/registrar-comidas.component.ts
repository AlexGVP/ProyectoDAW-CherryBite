import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { Alimento } from './alimento';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentoService } from './registrar-comidas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-comidas',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './registrar-comidas.component.html',
  styleUrl: './registrar-comidas.component.css'
})
export class RegistrarComidasComponent implements OnInit{
  displayedColumns: string[] = ['idalimento', 'nombre', 'porcion', 'descripcionGrupoAlimento'];
  alimentos : Alimento[] = []

  constructor(private alimentoService: AlimentoService,){}

  ngOnInit(): void {
    this.alimentoService.getAllAlimento().subscribe((data) => {
      console.log(data);
      this.alimentos = data;
    });
  }
}
