import { Routes } from '@angular/router';
import { CodigosComponent } from './pages/codigos/codigos.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    {path: '', redirectTo:'login', pathMatch:'full'},
    {path: 'codigos', component: CodigosComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
];
