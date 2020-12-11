import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    // template: '<h2>John Doe</h2>'
    // styles: [`
    //     h2 {
    //         color: blue;
    //     }
    // `]
})

export class UserComponent implements OnInit {
    // Properties

    // firstName: string;
    // lastName: string;
    // age: number;
    // address;

    // foo: any;
    // hasKids: boolean;
    // numberArray: number[];
    // stringArray: string[];
    // mixedArray: any[];
    // myTuple: [string, number, boolean];
    // unusable: void;
    // u: undefined;
    // n: null;
    user: User;

    // Methods
    constructor() {
        // this.sayHello();
        // console.log(this.age);
        // this.hasBirthday();
        // console.log(this.age);
        // this.firstName = 'John';
        // this.lastName = 'Doe';
        // this.age = 30;
        // this.address = {
        //     street: '50 Main st',
        //     city: 'Boston',
        //     state: 'MA'
        // }
        // this.foo = true;
        // this.hasKids = true;
        // this.numberArray = [1,2,3];
        // this.stringArray = ['hello', 'hi'];
        // this.mixedArray = [true, undefined, 'Yo'];
        // this.myTuple = ['hello', 3, false]; 
        // this.unusable = undefined;
        // this.u = undefined;
        // this.n = null;

        // console.log(this.addNumbers(2,3));
    }
    
    ngOnInit() {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            address: {
                street: '50 Main st',
                city: 'Boston',
                state: 'MA'
            }
        }
    }
    // sayHello() {
    //     console.log(`Hello ${this.firstName}`)
    // }
    // hasBirthday() {
    //     this.age += 1;
    // }
    // showAge() {
    //     return this.age + 2;
    // }
    // addNumbers(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

} 
