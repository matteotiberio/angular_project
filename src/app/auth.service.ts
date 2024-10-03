import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUsers: { id: number, username: string, email: string, phone: string,  }[] = [];

  login(username: string, password: string): Observable<boolean> {
    
    if (username && password) {
      const user = {
        id: this.loggedInUsers.length + 1,
        username,
        email: `${username}@example.com`,
        phone: '123456789',
        time: new Date()
      };
      this.loggedInUsers.push(user);
      return of(true);
    } else {
      return of(false);
    }
  }

  getloggedInUsers() {
    return this.loggedInUsers;
  }
}