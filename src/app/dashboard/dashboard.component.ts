import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-amaterial/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ){
    }

    salir(): void{
      this.authService.logout();
      this.router.navigateByUrl("/login")
    }
    irHome(): void{
      this.router.navigate(["home"], {relativeTo: this.route});
    }
    irRegistrarComidas(): void{
      this.router.navigate(["registrarComidas"], {relativeTo: this.route});
    }
    irConsultarComidas(): void{
      this.router.navigate(["consultarComidas"], {relativeTo: this.route});
    }
    irRegistrarHabitos(): void{
      this.router.navigate(["registrarHabitos"], {relativeTo: this.route});
    }
    irDatos(): void{
      this.router.navigate(["datos"], {relativeTo: this.route});
    }
    irNoticias(): void{
      this.router.navigate(["noticias"], {relativeTo: this.route});
    }
    irMantenimiento(): void{
      this.router.navigate(["mantenimiento"], {relativeTo: this.route});
    }
  }