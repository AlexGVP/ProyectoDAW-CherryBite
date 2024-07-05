import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { registrarComidasService } from './registrar-comidas.service';

@Component({
  selector: 'app-registrar-comidas',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './registrar-comidas.component.html',
  styleUrl: './registrar-comidas.component.css'
})
export class RegistrarComidasComponent implements OnInit {
  displayedColumns: string[] = ['idalimento', 'nombre', 'porcion', 'descripcionGrupoAlimento'];

  constructor(private registrarComidasService:registrarComidasService){}
  ngOnInit():void{
    this.registrarComidasService.getAlimento().subscribe(data=>{
    })
  }
}