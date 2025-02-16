import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Pet Shop | Deivid Barreto'
    },
    {
        path: '**',
        component: ErrorComponent,
        title: '404 | Page Not Found'
    }
];
