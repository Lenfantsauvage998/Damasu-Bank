import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { AhorrosComponent } from './Pages/Ahorros/ahorros/ahorros.component';
import { BalanceComponent } from './Pages/Balance/balance/balance.component';

export const routes: Routes = [

    {path: "Balance", component: BalanceComponent},
    {path: "Savings", component: AhorrosComponent},
    {path: "Home", component: HomeComponent},
    {path: "**", component: HomeComponent},

];
