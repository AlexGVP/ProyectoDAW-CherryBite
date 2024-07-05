import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Alimento } from './alimento';
import { AlimentoService } from './alimento.service';

@Component({
  selector: 'app-alimento',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './alimento.component.html',
  styleUrls: ['./alimento.component.css']
})

export class AlimentoComponent {
  displayedColumns: string[] = ['idalimento', 'nombre', 'porcion', 'descripcionGrupoAlimento'];
  alimento: Alimento[] = []

  constructor(private alimentoService: AlimentoService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
    this.alimentoService.getAllAlimento()
    .subscribe((data) => {
      console.log(data);
      this.alimento = data;
    })
  }
}
