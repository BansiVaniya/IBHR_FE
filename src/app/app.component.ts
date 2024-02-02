import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './shared/components/auth/login/login.component';
import { ForgotPasswordComponent } from './shared/components/auth/forgot-password/forgot-password/forgot-password.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    LoginComponent, 
    ForgotPasswordComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
