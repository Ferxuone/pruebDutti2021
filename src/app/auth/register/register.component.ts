import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MIN_LENGTH_3, MIN_LENGTH_6 } from 'src/app/core/consts/consts';
import { AuthService } from 'src/app/core/services/auth/auth.service';

// JSON

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading = false;
  registered = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: [ '', [Validators.required, Validators.minLength(MIN_LENGTH_3)]],
      last_name: [ '', [Validators.required, Validators.minLength(MIN_LENGTH_3)]],
      username: [ '', [Validators.required, Validators.minLength(MIN_LENGTH_3)]],
      email: [ '', [Validators.required, Validators.minLength(MIN_LENGTH_6)]]
    });
  }

  registerUser(): void {
    if (this.registerForm.invalid) { return; }
    this.authService.register(this.registerForm.value).subscribe(
      (response: boolean) => {
        response ? this.router.navigate(['/ships']) : this.registered = true;
      }
    );
  }

}
