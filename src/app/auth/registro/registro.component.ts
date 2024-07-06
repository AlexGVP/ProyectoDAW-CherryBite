import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { RegistroService } from './registro.service';
import { CommonModule } from '@angular/common';



enum FormType {
  Crear = 0,
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  FormType = FormType;
  postForm!: FormGroup;
  formType = FormType.Crear;
  formTitulo = "NUEVO USUARIO";

  constructor(
    private registroService: RegistroService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.postForm = this.formulario();
  }
  
  formulario(): UntypedFormGroup {
    return new UntypedFormGroup({
      nomusuario: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      nombres: new FormControl(''),
      apellidos: new FormControl('')      
    });
  }
  
  guardarPost(): void {
    if (this.postForm.valid) {
      this.registrarPost();
    }
  }

  registrarPost(): void {
    if (this.postForm.valid) {
      this.registroService.createUsuario(this.postForm.getRawValue()).subscribe(
        data => {
          this.route.navigate(['/login']);
        },
        error => {
          console.error('Error al crear usuario:', error);
        }
      );
    }
  }
}
