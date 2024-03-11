import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { Landing2Component } from './landing-page/landing2/landing2.component';

export const routes: Routes = [
    {
        path:'',
        component:Landing2Component,
        title:'Landing page'
    },
    {
        path:'login',
        loadComponent : ()=> import ('./auth/login/login.component').then(m=>m.LoginComponent),
        title:'Login page'
    },
    {
        path:'registration',
        loadComponent : ()=> import ('./auth/registration/registration.component').then(m=>m.RegistrationComponent),
        title:'Registration page'
    },
    {
        path:'home',
        canActivate:[authGuard],
        loadChildren : ()=> import ('./home/home.routes').then(m=>m.routes),
        title:'Home page'
    },
];
