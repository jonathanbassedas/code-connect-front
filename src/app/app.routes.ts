import { Routes } from '@angular/router';
import { CodigosComponent } from './pages/codigos/codigos.component';

export const routes: Routes = [
    {path: '', redirectTo:'codigos', pathMatch:'full'},
    {path: 'codigos', component: CodigosComponent},];
