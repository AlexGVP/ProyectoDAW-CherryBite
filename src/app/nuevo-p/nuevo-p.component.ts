import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';
import { UsuarioI } from '../modelo/usuario.interface';


@Component({
  selector: 'app-nuevo-p',
  templateUrl: './nuevo-p.component.html',
  styleUrls: ['./nuevo-p.component.css']
})
export class NuevoPComponent implements OnInit {

  nuevoForm = new FormGroup({
    nombre: new FormControl(''),
    correo : new FormControl(''),
    dni: new FormControl(''),
    direccion: new FormControl(''),
    codigoPostal: new FormControl(''),
    genero: new FormControl(''),
    telefono: new FormControl(''),
    token: new FormControl(''),
    pacienteId: new FormControl(''),
    fechaNacimiento: new FormControl('')
});


  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.nuevoForm.patchValue({
      'token' : token
    });
  }

  enviarForm(form:UsuarioI){
      this.api.postPatient(form).subscribe( data =>{
          console.log(data);
      })
  }

  salir(){
    this.router.navigate(['dashboard']);
  }

}