import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let routerSpy: { navigate: unknown};
  let serviceSpy: AuthService;

  beforeEach(waitForAsync(() => {
    routerSpy = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    serviceSpy = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be unregistered', () => {
    spyOn(serviceSpy, 'register').and.returnValue(of(false));
    component.registerForm.controls.first_name.setValue('username');
    component.registerForm.controls.last_name.setValue('username');
    component.registerForm.controls.username.setValue('username');
    component.registerForm.controls.email.setValue('username@gmail.com');
    component.registerUser();
    expect(component.registered).toBeTruthy();
  });

  it('shold be registered', () => {
    component.registerForm.controls.first_name.setValue('username');
    component.registerForm.controls.last_name.setValue('username');
    component.registerForm.controls.username.setValue('username');
    component.registerForm.controls.email.setValue('username@gmail.com');
    component.registerUser();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/ships']);
  });
});
