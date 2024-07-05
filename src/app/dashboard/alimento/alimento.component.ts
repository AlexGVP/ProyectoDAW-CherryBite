import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { Alimento } from './alimento';
import { AlimentoService } from './alimento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alimento',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './alimento.component.html',
  styleUrl: './alimento.component.css'
})
export class AlimentoComponent {
  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
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