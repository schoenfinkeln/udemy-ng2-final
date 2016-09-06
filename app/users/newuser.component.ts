import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { BasicValidators } from '../shared/email.validator';

import { User } from './user';

@Component({
    templateUrl: 'app/users/newuser.component.html'
})
export class NewUserComponent implements OnInit {
    addUserForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.buildForm();
    }

    ngOnInit() {
    }

    buildForm() {
        this.addUserForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', BasicValidators.email],
            phone: [],
            address: this.formBuilder.group({
                street: [],
                suite: [],
                city: [],
                zip: ['', Validators.maxLength(5)]
            })
        });
    }

    onSubmit() {
        console.log(this.addUserForm.value);
    }

    logIt(email:any){
        console.log(email);
    }
}