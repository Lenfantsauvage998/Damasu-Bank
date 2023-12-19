import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { AhorrosComponent } from './Pages/Ahorros/ahorros/ahorros.component';
import { FormCalculateComponent } from './Components/form-calculate/form-calculate.component';
import { FormPersonalInfoComponent } from './Components/form-personal-info/form-personal-info.component';
import { MainComponent } from './Pages/CDT/main/main.component';

export const routes: Routes = [
  { path: 'Savings', component: AhorrosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeComponent },
  { path: 'CDT', component: MainComponent },
  //   { path: '**', component: HomeComponent },

  {
    path: 'CDT',
    children: [
      // {path: '', redirectTo:'CDT', pathMatch:'full'},
      { path: 'personal-info', component: FormPersonalInfoComponent },
      { path: 'calulate', component: FormCalculateComponent },
    ],
  },
];
