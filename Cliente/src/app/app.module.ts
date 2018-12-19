import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { app_routing } from './app.routes';
// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BoletinComponent } from './components/boletin/boletin.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FranquiciaComponent } from './components/franquicia/franquicia.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PuertomontComponent } from './components/puertomont/puertomont.component';
import { VerdenovaComponent } from './components/verdenova/verdenova.component';
import { LegazpiComponent } from './components/legazpi/legazpi.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { RseComponent } from './components/rse/rse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    AboutComponent,
    ContactComponent,
    BoletinComponent,
    ProyectoComponent,
    FranquiciaComponent,
    ClienteComponent,
    PuertomontComponent,
    VerdenovaComponent,
    LegazpiComponent,
    TestimoniosComponent,
    RseComponent
  ],
  imports: [
    BrowserModule,
      app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
