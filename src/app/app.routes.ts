import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/auth/login/login.component';
import { ForgotPasswordComponent } from './shared/components/auth/forgot-password/forgot-password/forgot-password.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'app-forgot-password', component: ForgotPasswordComponent},
];
