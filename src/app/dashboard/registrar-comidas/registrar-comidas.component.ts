import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { Alimento } from './alimento';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentoService } from './registrar-comidas.service';
import { CommonModule } from '@angular/common';
import { DetalleAlimento } from './detalleAlimento';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-registrar-comidas',
  standalone: true,
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './registrar-comidas.component.html',
  styleUrls: ['./registrar-comidas.component.css']
})
export class RegistrarComidasComponent implements OnInit {
  displayedColumns: string[] = ['idalimento', 'nombre', 'porcion', 'descripcionGrupoAlimento'];
  dataSource = new MatTableDataSource<Alimento>([]);
  detalleForm: FormGroup;
  searchControl = new FormControl('');

  constructor(
    private alimentoService: AlimentoService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    const userId = Number(sessionStorage.getItem("idusuario") ?? '0'); // Use '0' as fallback if null
    this.detalleForm = this.fb.group({
      idusuario: [userId, Validators.required],
      idalimento: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.alimentoService.getAllAlimento().subscribe((data) => {
      this.dataSource.data = data;
    });

    this.searchControl.valueChanges.subscribe((value) => {
      this.applyFilter(value ?? '');
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  seleccionarAlimento(idalimento: number) {
    if (this.detalleForm.get('idalimento')) {
      this.detalleForm.get('idalimento')?.setValue(idalimento);
    }
  }

  registrarDetalleAlimento(): void {
    if (this.detalleForm.valid) {
      const detalleAlimento: DetalleAlimento = this.detalleForm.value;
      this.alimentoService.postDetalleAlimento(detalleAlimento).subscribe((response) => {
        console.log('DetalleAlimento registrado:', response);
        alert('DetalleAlimento registrado correctamente.');
      }, (error) => {
        alert('Error al registrar DetalleAlimento');
        console.error('Error al registrar DetalleAlimento:', error);
      });
    }
  }
}
