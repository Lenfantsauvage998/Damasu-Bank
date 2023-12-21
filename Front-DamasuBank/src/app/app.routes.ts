import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { AhorrosComponent } from './Pages/Ahorros/ahorros/ahorros.component';
import { FormCalculateComponent } from './Components/form-calculate/form-calculate.component';
import { FormPersonalInfoComponent } from './Components/form-personal-info/form-personal-info.component';
import { MainComponent } from './Pages/CDT/main/main.component';
import { BalanceComponent } from './Pages/Balance/balance/balance.component';
import { balanceguard } from './Guards/balance.guard';
import { LogInComponent } from './Pages/Log-in/log-in/log-in.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeComponent },
  { path: 'Savings', component: AhorrosComponent },
  { path: 'CDT', component: MainComponent },
  {
    path: 'CDT',
    children: [
      // {path: '', redirectTo:'CDT', pathMatch:'full'},
      { path: 'personal-info', component: FormPersonalInfoComponent },
      { path: 'calulate', component: FormCalculateComponent },
    ],
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'Balance',
    component: BalanceComponent,
    canActivate: [balanceguard],
  },
  {
    path: 'Savings',
    component: AhorrosComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
];
