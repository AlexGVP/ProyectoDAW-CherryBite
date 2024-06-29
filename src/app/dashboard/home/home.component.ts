import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ){
    }
    irCalcularIMC(): void{
      this.router.navigate(["calcularIMC"], {relativeTo: this.route});
    }
}
