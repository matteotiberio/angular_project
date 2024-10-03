import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit(): void {}

  printValues() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.router.navigate(['/list-clients']);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      this.authService.login(username, password).subscribe({
        next: (isAuthenticated) => {
          if (isAuthenticated) {
            this.router.navigate(['/list-clients']);
          } else {
            alert('Credenziali non valide');
          }
        },
        error: (err) => {
          console.error('Errore del server', err);
        }


        
      });
      
    }
  }

  
  
  
  
  
  //loginForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required]
  //   });
  // }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     const email = this.loginForm.get('email')?.value;
  //     const password = this.loginForm.get('password')?.value;
  //     console.log('Login effettuato con:', email, password);
  //   }
  // }  
}
