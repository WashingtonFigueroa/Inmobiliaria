import { RouterModule, Routes} from '@angular/router';
import {
    AboutComponent,
    ClienteComponent,
    ContactComponent,
    FranquiciaComponent, LegazpiComponent,
    PrincipalComponent,
    ProyectoComponent, PuertomontComponent, RseComponent, TestimoniosComponent, VerdenovaComponent
} from './components/rutas.paginas';

const app_routes: Routes = [
    { path: 'inicio', component: PrincipalComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'cliente', component: ClienteComponent},
    { path: 'franquicia', component: FranquiciaComponent},
    { path: 'proyecto', component: ProyectoComponent},
    { path: 'puertomont', component: PuertomontComponent},
    { path: 'verdenova', component: VerdenovaComponent},
    { path: 'legazpi', component: LegazpiComponent},
    { path: 'testimonios', component: TestimoniosComponent},
    { path: 'rse', component: RseComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash: true});