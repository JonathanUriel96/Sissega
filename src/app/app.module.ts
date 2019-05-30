import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Autenticacion/login/login.component';
import { RegistroComponent } from './Autenticacion/registro/registro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AutenticacionService } from './servicios/autenticacion.service';
import { PrincipalComponent } from './principal/principal.component';
import { DetallesComponent } from './detalles/detalles.component';
import { VacunasComponent } from './Medicamentos/vacunas/vacunas.component';
import { DesparasitantesComponent } from './Medicamentos/desparasitantes/desparasitantes.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { HerbicidasComponent } from './herbicidas/herbicidas.component';



const routes: Routes = [
{path: '', component: NavbarComponent},
{path: 'Principal', component: PrincipalComponent},
{path: 'Login', component: LoginComponent},
{path: 'Registrarse', component: RegistroComponent},
{path: 'Detalles',  component: DetallesComponent},
{path: 'Vacunas', component: VacunasComponent},
{path: 'Desparacitantes', component: DesparasitantesComponent},
{path: 'Alimentos', component: AlimentosComponent},
{path: 'herbicidas', component: HerbicidasComponent},
{path: '**', component: PrincipalComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    PrincipalComponent,
    DetallesComponent,
    VacunasComponent,
    DesparasitantesComponent,
    AlimentosComponent,
    HerbicidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
