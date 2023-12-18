import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { AhorrosComponent } from './Pages/Ahorros/ahorros/ahorros.component';
import { BalanceComponent } from './Pages/Balance/balance/balance.component';
import { balanceguard } from './Guards/balance.guard';
import { LogInComponent } from './Pages/Log-in/log-in/log-in.component';

export const routes: Routes = [

    {
        path: "login", 
    component: LogInComponent
    },
    {
        path: "Balance", 
    component: BalanceComponent,
    canActivate: [balanceguard]
    },
    {
        path: "Savings", 
    component: AhorrosComponent,
    
    },
    {
        path: "Home", 
    component: HomeComponent
    },
    {
        path: "**", 
    component: HomeComponent
    },

];
