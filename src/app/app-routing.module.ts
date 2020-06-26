import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './usuario/test/test.component';
import { Test2Component } from './usuario/test/Tabla/test2.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BarraAdminComponent } from './administrador/barra-admin/barra-admin.component';
import { AdministradorComponent } from './administrador/administrador.component';
import {TablaAdminComponent} from './administrador/tabla-admin/tabla-admin.component'
import {FormComponent} from './usuario/form/form.component';
import {SeccionesComponent} from'./secciones/secciones.component';
import {LoginComponent} from './secciones/login/login.component'
import { ResultadoComponent } from './usuario/form/resultado/resultado.component';
import { BarraComponent } from './usuario/barra/barra.component';
import { FilasActualesComponent } from './usuario/filas-actuales/filas-actuales.component';
import { RegistroComponent } from './usuario/login-cliente/registro/registro.component';
const routes: Routes = [
{path:'',component:SeccionesComponent},
{path:'app-registro',component:RegistroComponent},
{path:'app-barra/:rut',component:BarraComponent},
{path:'app-login',component:LoginComponent},
{path: 'app-tiendas/:rut', component:TestComponent},
{path:'app-test2/:rut/:id', component:Test2Component},
{path:'app-usuario',component:UsuarioComponent},
{path:'app-barra-admin',component:BarraAdminComponent},
{path:'app-administrador',component:AdministradorComponent},
{path:'app-tabla-admin',component:TablaAdminComponent}
,{path:'app-form/:id/:rut',component:FormComponent},
{path:'app-filas-actuales/:rut',component:FilasActualesComponent},
{path:'app-resultado/:rut/:id_tienda',component:ResultadoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
