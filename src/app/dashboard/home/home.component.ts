import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Noticia } from '../noticias/noticia';
import { NoticiasService } from '../noticias/noticias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  noticias: Noticia[] = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private noticiasService: NoticiasService
  ){
    }
    irCalcularIMC(): void{
      this.router.navigate(["calcularIMC"], {relativeTo: this.route});
    }

    ngOnInit(): void {
      this.noticiasService.getAllNoticia().subscribe((data) => {
        this.noticias = data.slice(0, 4); // Obtener las primeras 4 noticias
      });
    }
}


