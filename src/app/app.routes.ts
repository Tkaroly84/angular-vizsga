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
        component:Landing2Component
    },
    {
        path:'home',
        canActivate:[authGuard],
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'registration',
        component:RegistrationComponent
    },
    {
        path:'nevnap',
        component:NevnapComponent
    },


];
