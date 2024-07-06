import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { CommonModule } from '@angular/common';
import { Noticia } from './noticia';
import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit{
  displayedColumns: string[] = ['titulo', 'descripcion', 'imagen', 'fecha'];
  noticia : Noticia[] = []

  constructor(private noticiasService: NoticiasService,){}

  ngOnInit(): void {
    this.noticiasService.getAllNoticia().subscribe((data) => {
      console.log(data);
      this.noticia = data;
    });
  }
}
