import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LoginRequestModel, UserModel } from '../../models/auth.models';

describe('AuthService', () => {
  let service: AuthService;
  let usersList: UserModel[] = [
    {
      first_name: 'username',
      last_name: 'username',
      username: 'username',
      email: 'username@gmail.com'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    localStorage.setItem('users', JSON.stringify(usersList));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should be login success', () => {
    const loginRequest: LoginRequestModel = {username: 'username', password: '123qwe'};
    service.login(loginRequest).subscribe((result: boolean) => expect(result).toBeTrue());
  });
  
  it('should be login error (not userList)', () => {
    localStorage.removeItem('users');
    const loginRequest: LoginRequestModel = {username: 'username', password: '123qwe'};
    service.login(loginRequest).subscribe((result: boolean) => expect(result).toBeFalse());
  });

  it('should be login error', () => {
    const loginRequest: LoginRequestModel = {username: 'username3', password: '123qwe'};
    service.login(loginRequest).subscribe((result: boolean) => expect(result).toBeFalse());
  });

  it('should be register success', () => {
    const user: UserModel = {
      first_name: 'username2',
      last_name: 'username2',
      username: 'username2',
      email: 'username2@gmail.com'
    };
    service.register(user).subscribe((result: boolean) => expect(result).toBeTrue());
  });

  it('should be register error (duplicate user)', () => {
    const user: UserModel = {
      first_name: 'username',
      last_name: 'username',
      username: 'username',
      email: 'username@gmail.com'
    };
    service.register(user).subscribe((result: boolean) => expect(result).toBeFalse());
  });

});
