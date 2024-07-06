import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../angular-amaterial/material/material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ){
    }
  
  navigateToHome(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/']);
  }
  
  submit(usuario: HTMLInputElement, password: HTMLInputElement): void {
    this.authService.login(usuario.value, password.value).subscribe({
      next: (response) => {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('isLogged', 'true');
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        alert(err.error.message);
      }
    });
  }

  irRegistrarse(): void{
    this.router.navigate(["register"]);
  }
}