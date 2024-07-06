import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Noticia } from '../noticias/noticia';
import { NoticiasService } from '../noticias/noticias.service';
import { DatosService } from '../datos/datos.service';
import { CommonModule } from '@angular/common';
import { Dato } from '../datos/dato';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  noticia: Noticia[] = [];

  dato: Dato[] = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private noticiasService: NoticiasService,
    private datosService: DatosService
  ){
    }
    irCalcularIMC(): void{
      this.router.navigate(["calcularIMC"], {relativeTo: this.route});
    }

    ngOnInit(): void {
      this.noticiasService.getAllNoticia().subscribe((data) => {
        this.noticia = data.slice(0, 4);
      });

      this.datosService.getAllDato().subscribe((data) => {
        this.dato = data.slice(0, 4);
      });
    }
}


