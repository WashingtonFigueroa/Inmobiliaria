import { RouterModule, Routes} from '@angular/router';
import {AboutComponent, ContactComponent, PrincipalComponent} from './components/rutas.paginas';

const app_routes: Routes = [
    { path: 'inicio', component: PrincipalComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash: true});