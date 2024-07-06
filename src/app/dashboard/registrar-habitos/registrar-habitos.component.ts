import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { CommonModule } from '@angular/common';
import { Habito } from './habito';
import { HabitoService } from './registrar-habitos.service';

@Component({
  selector: 'app-registrar-habitos',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './registrar-habitos.component.html',
  styleUrl: './registrar-habitos.component.css'
})
export class RegistrarHabitosComponent {
  displayedColumns: string[] = ['idhabito', 'descripcionhabito', 'frecuencia', 'progreso'];
  habitos : Habito[] = []

  constructor(private habitoService:HabitoService,){}
  ngOnInit(): void {
    this.habitoService.getAllHabito().subscribe((data) => {
      console.log(data);
      this.habitos = data;
    });
  }
}
