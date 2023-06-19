import { Injectable } from '@angular/core';
import { LoginRequestModel, UserModel } from '../../models/auth.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(loginUser: LoginRequestModel): Observable<boolean> {
    const usersList: UserModel[] = JSON.parse(localStorage.getItem('users'));
    if (usersList?.find(user => user.username === loginUser.username)) {
      localStorage.setItem('currentUser', loginUser.username);
      return of(true);
    }
    return of(false);
  }

  register(user: UserModel): Observable<boolean> {
    const usersList: UserModel[] = JSON.parse(localStorage.getItem('users'));
    if (!usersList) {
      localStorage.setItem('users', JSON.stringify([user]));
      localStorage.setItem('currentUser', user.username); /* Autologin */
      return of(true);
    } else {
      if (!usersList.find(u => u.username === user.username)) {
        usersList.push(user);
        localStorage.setItem('users', JSON.stringify(usersList));
        localStorage.setItem('currentUser', user.username); /* Autologin */
        return of(true);
      }
      return of(false);
    }
  }

}
