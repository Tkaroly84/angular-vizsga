import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { authGuard } from './auth/auth.guard';
import { NevnapComponent } from './home/nevnap/nevnap.component';
import { Landing2Component } from './landing-page/landing2/landing2.component';

export const routes: Routes = [
    {
        path:'',
        component:Landing2Component,
        title:'Landing page'
    },
    {
        path:'login',
        component:LoginComponent,
        title:'Login page'
    },
    {
        path:'registration',
        component:RegistrationComponent,
        title:'Registration page'
    },
    {
        path:'home',
        canActivate:[authGuard],
        //loadChildren : ()=> import ('./home/home.routes').then(m=>m.routes),
        component:HomeComponent,
        title:'Home page'

    },
    {
        path:'nevnap',
        component:NevnapComponent,
        title:'Nevnap page'

    },


];
