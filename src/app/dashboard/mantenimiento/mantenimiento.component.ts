import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientoService } from './mantenimiento.service';
import { Usuario } from './usuario';
import { MatSnackBar } from '@angular/material/snack-bar';

enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-mantenimiento',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './mantenimiento.component.html',
  styleUrl: './mantenimiento.component.css'
})
export class MantenimientoComponent {
  FormType = FormType;

  mantenimientoId: string | null = ''
  mantenimientoForm!: FormGroup
  formType!: FormType
  formTitulo!: string

  constructor(
    private router: ActivatedRoute,
    private mantenimientoService: MantenimientoService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.mantenimientoId = this.router.snapshot.paramMap.get('id');
    this.mantenimientoForm = this.formulario();
    if (this.mantenimientoId !== 'nuevo') {
      this.formTitulo = "EDITAR USUARIO";
      this.formType = FormType.Actualizar;
      this.cargarUsuario(Number(this.mantenimientoId));
      this.mantenimientoForm.removeControl('password'); // Elimina el campo password para la edición
    } else {
      this.formTitulo = "NUEVO USUARIO";
      this.formType = FormType.Crear;
      this.mantenimientoForm.get('nomusuario')?.enable(); // Habilita el campo para la creación
    }
  }

  formulario(): UntypedFormGroup {
    const formGroup = new UntypedFormGroup({
      nomusuario: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
    });
    if (this.router.snapshot.paramMap.get('id') === 'nuevo') {
      formGroup.addControl('password', new FormControl(''));
    }
    return formGroup;
  }
  
  cargarUsuario(mantenimientoid:number): void{
    this.mantenimientoService.buscarusuarioPorId(mantenimientoid)
    .subscribe(
      (data) => {
        console.log(data)
        const {nomusuario, email, nombres, apellidos} = data
        this.mantenimientoForm.setValue({nomusuario, email, nombres, apellidos})
      })
  }

  guardarUsuario(): void {
    if (this.formType === FormType.Crear) {
      this.nuevoUsuario();
    } else {
      this.actualizarUsuario();
    }
  }

  nuevoUsuario(): void {
    if (this.mantenimientoForm.valid) {
      this.mantenimientoService.nuevoUsuario(this.mantenimientoForm.getRawValue()).subscribe(
        data => {
          this.route.navigate(['/usuario']);
          this.snackBar.open(data.message, 'Cerrar', { duration: 3000, panelClass: ['success-snackbar'] });
        },
        error => {
          console.error('Error al crear usuario:', error);
          this.snackBar.open('Ocurrió un error al agregar el usuario', 'Cerrar', { duration: 3000, panelClass: ['error-snackbar'] });
        }
      );
    }
  }

  actualizarUsuario(): void {
    if (this.mantenimientoForm.valid) {
      const usuario: Usuario = { idusuario: this.mantenimientoId, ...this.mantenimientoForm.getRawValue() };
      this.mantenimientoService.actualizarUsuario(usuario).subscribe(
        data => {
          this.route.navigate(['/usuario']);
          this.snackBar.open(data.message, 'Cerrar', { duration: 3000, panelClass: ['success-snackbar'] });
        },
        error => {
          console.error('Error al actualizar usuario:', error);
          this.snackBar.open('Ocurrió un error al actualizar el usuario', 'Cerrar', { duration: 3000, panelClass: ['error-snackbar'] });

        }
      );
    }
  }
}