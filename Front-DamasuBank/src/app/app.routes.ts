import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { AhorrosComponent } from './Pages/Ahorros/ahorros/ahorros.component';

export const routes: Routes = [

    {path: "Savings", component: AhorrosComponent},
    {path: "Home", component: HomeComponent},
    {path: "**", component: HomeComponent},

];
