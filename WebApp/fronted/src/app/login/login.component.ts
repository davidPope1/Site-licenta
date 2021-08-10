import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderStateService } from '../services/header-state.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl(null, [Validators.required]);
  password = new FormControl(null, [
    Validators.required,
    Validators.minLength(2),
  ]);

  signinForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  ngOnInit(): void {}

  constructor(
    private userService: UserServiceService,
    private headerService: HeaderStateService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.signinForm.valid) {
      console.log(this.signinForm.getRawValue());
      


      this.userService.login(this.signinForm.get('email')?.value, this.signinForm.get('password')?.value).subscribe(data => {
        console.log('Log in!')
        if (data != null) {
          this.headerService.headerStatus.emit(true);
          this.router.navigate(['/dashboard']);
        }
      })



      // user service - login - subscribe
    } else {
      this.signinForm.markAsTouched();
    }
    this.signinForm.reset();
  }
}
