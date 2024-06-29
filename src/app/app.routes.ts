import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './dashboard/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalcularIMCComponent } from './dashboard/calcular-imc/calcular-imc.component';
import { RegistrarComidasComponent } from './dashboard/registrar-comidas/registrar-comidas.component';
import { ConsultarComidasComponent } from './dashboard/consultar-comidas/consultar-comidas.component';
import { RegistrarHabitosComponent } from './dashboard/registrar-habitos/registrar-habitos.component';
import { DatosComponent } from './dashboard/datos/datos.component';
import { NoticiasComponent } from './dashboard/noticias/noticias.component';
import { MantenimientoComponent } from './dashboard/mantenimiento/mantenimiento.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent,
        canActivate: [authGuard],
        children: [
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
            },
            {
                path: "home", component: HomeComponent,
            },
            { path: "registrarComidas", component: RegistrarComidasComponent },
            { path: "consultarComidas", component: ConsultarComidasComponent },
            { path: "registrarHabitos", component: RegistrarHabitosComponent },
            { path: "datos", component: DatosComponent },
            { path: "noticias", component: NoticiasComponent },
            { path: "calcularIMC", component: CalcularIMCComponent },
            { path: "mantenimiento", component: MantenimientoComponent }
        ]
    },
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];