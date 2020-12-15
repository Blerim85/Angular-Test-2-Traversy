import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { of } from 'rxjs';

import { User } from '../models/User';

@Injectable() // {providedIn: 'root'}

export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2020 08:30.00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@gmail.com',
        isActive: false,
        registered: new Date('11/12/2020 09:30.00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('04/08/2020 12:00.00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next({name: 'Blerim'});
      }, 4000);
    });
    return this.data;
  }

  getUsers(): Observable<User[]> {
    console.log('Fetching users from Service..');
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
