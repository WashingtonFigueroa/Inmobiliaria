import { RouterModule, Routes} from '@angular/router';
import {
    AboutComponent,
    ClienteComponent,
    ContactComponent,
    FranquiciaComponent,
    PrincipalComponent,
    ProyectoComponent
} from './components/rutas.paginas';

const app_routes: Routes = [
    { path: 'inicio', component: PrincipalComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'cliente', component: ClienteComponent},
    { path: 'franquicia', component: FranquiciaComponent},
    { path: 'proyecto', component: ProyectoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash: true});