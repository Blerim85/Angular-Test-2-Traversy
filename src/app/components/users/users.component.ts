import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit(): void {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
        },
        // image: 'https://images.freeimages.com/images/large-previews/a0c/dancer-jumping-doing-a-tilt-1632059.jpg',
        isActive: true,
        // balance: 100,
        registered: new Date('01/02/2020 08:30.00')
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
        },
        isActive: false,
        registered: new Date('11/12/2020 09:30.00')
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
        },
        isActive: true,
        registered: new Date('04/08/2020 12:00.00')
      }
    ];

    this.loaded = true;

    // this.addUser({
    //   firstName: 'David',
    //     lastName: 'Jackson'
    // });
    // this.setCurrentClasses();
    // this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  // setCurrentClasses() {
  //   this.currentClasses = {
  //     'btn-success': this.enableAdd,
  //     'big-text': this.showExtended
  //   }
  // }

  // setCurrentStyles() {
  //   this.currentStyles = {
  //     'padding-top': this.showExtended ? '0' : '40px',
  //     'font-size': this.showExtended ? '' : '40px'
  //   }
  // }

}
/*
vorne einen punkt weniger "./node_"!!!
"../node_modules/bootstrap/dist/css/bootstrap.css"
              "../node_modules/jquery/dist/jquery.js",
              "../node_modules/popper.js/dist/umd/popper.js",
              "../node_modules/bootstrap/dist/js/bootstrap.js"
*/
