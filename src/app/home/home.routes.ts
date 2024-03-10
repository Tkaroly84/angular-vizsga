import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NevnapComponent } from './nevnap/nevnap.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'nevnap',
        component:NevnapComponent
    },
];