import { Routes } from '@angular/router';
import { CodigosComponent } from './pages/codigos/codigos.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    {path: '', redirectTo:'login', pathMatch:'full'},
    {path: 'codigos', component: CodigosComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'profile', component: ProfileComponent},
];
