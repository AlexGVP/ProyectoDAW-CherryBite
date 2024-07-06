import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientoService } from './mantenimiento.service';
import { Usuario } from './usuario';

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
  
  postId: string | null = ''
  postForm!: FormGroup
  formType!: FormType
  formTitulo!: string
  constructor(
    private router: ActivatedRoute,
    private mantenimientoService: MantenimientoService,
    private route: Router
  ){
  }

  ngOnInit(): void {
    this.postId = this.router.snapshot.paramMap.get('id');
    this.postForm = this.formulario();
    if (this.postId !== 'nuevo') {
      this.formTitulo = "EDITAR USUARIO";
      this.formType = FormType.Actualizar;
      this.cargarPost(Number(this.postId));
      this.postForm.get('nomusuario')?.disable(); // Deshabilita el campo para la edición
      this.postForm.removeControl('password'); // Elimina el campo password para la edición
    } else {
      this.formTitulo = "NUEVO USUARIO";
      this.formType = FormType.Crear;
      this.postForm.get('nomusuario')?.enable(); // Habilita el campo para la creación
    }
  }
  
  formulario(): UntypedFormGroup {
    const formGroup = new UntypedFormGroup({
      nomusuario: new FormControl(''),
      email: new FormControl(''),
      nombres: new FormControl(''),
      apellidos: new FormControl(''),
    });
  
    if (this.router.snapshot.paramMap.get('id') === 'nuevo') {
      formGroup.addControl('password', new FormControl(''));
    }
    return formGroup;
  }
  
  cargarPost(postid:number): void{
    this.mantenimientoService.buscarusuarioPorId(postid)
    .subscribe(
      (data) => {
        console.log(data)
        const {nomusuario, email, nombres, apellidos} = data
        this.postForm.setValue({nomusuario, email, nombres, apellidos})
      })
  }
  guardarPost(): void {
    if (this.formType === FormType.Crear) {
      this.registrarPost();
    } else {
      this.actualizarUsuario();
    }
  }

  registrarPost(): void {
    if (this.postForm.valid) {
      this.mantenimientoService.nuevoUsuario(this.postForm.getRawValue()).subscribe(
        data => {
          this.route.navigate(['/usuario']);        },
        error => {
          console.error('Error al crear usuario:', error);
        }
      );
    }
  }

  actualizarUsuario(): void {
    if (this.postForm.valid) {
      const usuario: Usuario = { idusuario: this.postId, ...this.postForm.getRawValue() };
      this.mantenimientoService.actualizarUsuario(usuario).subscribe(
        data => {
          this.route.navigate(['/usuario']);
        },
      );
    }
  }
}
