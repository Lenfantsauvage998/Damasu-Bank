import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { AhorrosComponent } from './Pages/Ahorros/ahorros/ahorros.component';
import { BalanceComponent } from './Pages/Balance/balance/balance.component';
import { balanceguard } from './Guards/balance.guard';
import { LogInComponent } from './Pages/Log-in/log-in/log-in.component';
import { PseComponent } from './Pages/PSE/pse/pse.component';

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
        path: "PSE", 
    component: PseComponent,
    canActivate: [balanceguard]
    
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
