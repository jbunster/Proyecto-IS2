import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import { BarraComponent } from './usuario/barra/barra.component';
import {MatTableModule} from '@angular/material/table';
import { TestComponent } from './usuario/test/test.component';
import { Test2Component } from './usuario/Tabla/test2.component';
import {MatCardModule} from '@angular/material/card';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { BarraAdminComponent } from './administrador/barra-admin/barra-admin.component'
import { TablaAdminComponent } from './administrador/tabla-admin/tabla-admin.component';
import { FormComponent } from './usuario/form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SeccionesComponent } from './secciones/secciones.component';
import { LoginComponent } from './secciones/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    TestComponent,
    Test2Component,
    UsuarioComponent,
    AdministradorComponent,
    BarraAdminComponent,
    TablaAdminComponent,
    FormComponent,
    SeccionesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
