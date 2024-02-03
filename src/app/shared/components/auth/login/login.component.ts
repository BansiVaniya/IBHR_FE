import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {EMAIL_PATTERN} from '../../../helpers/emailValidation';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm : FormGroup;
  loginSubmitted:boolean=false;
constructor(){
  this.loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_PATTERN),
    ]),
    password:new FormControl('',[Validators.required])
  });
}
ngOnInit() {

}
login(){

}

}
