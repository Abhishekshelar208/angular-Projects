import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName = signal<string>('');

  setUserName(name: string) {
    this.userName.set(name);
  }

  getUserName() {
    return this.userName();
  }
}
