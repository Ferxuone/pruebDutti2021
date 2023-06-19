import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy: { navigate: unknown};
  let serviceSpy: AuthService;

  beforeEach(waitForAsync(() => {
    routerSpy = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    serviceSpy = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be unlogged', () => {
    spyOn(serviceSpy, 'login').and.returnValue(of(false));
    component.loginForm.controls.username.setValue('username');
    component.loginForm.controls.password.setValue('123qwe');
    component.loginUser();
    expect(component.unregistered).toBeTruthy();
  });

  it('shold be logged', () => {
    spyOn(serviceSpy, 'login').and.returnValue(of(true));
    component.loginForm.controls.username.setValue('username');
    component.loginForm.controls.password.setValue('123qwe');
    component.loginUser();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/ships']);
  });
});
