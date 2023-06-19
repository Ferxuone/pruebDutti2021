import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MIN_LENGTH_3, MIN_LENGTH_6 } from 'src/app/core/consts/consts';
import { UserModel } from 'src/app/core/models/auth.models';
import { AuthService } from 'src/app/core/services/auth/auth.service';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading = false;
  users: UserModel[] = usersList;
  unregistered = false;
  invalid = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(MIN_LENGTH_3)]],
      password: [ '', [Validators.required, Validators.minLength(MIN_LENGTH_6)]]
    });
  }
  loginUser(): void {
    if (this.loginForm.invalid) { return; }
    this.authService.login(this.loginForm.value).subscribe(
      (response: boolean) => {
        response ? this.router.navigate(['/ships']) : this.unregistered = true;
      }
    );
  }
}

