import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from '../../services/user.auth.service';
import { SectorsService } from '../../services/sectors.service';
import { FormBuilder } from '@angular/forms';

import { User } from '../../models/User';

@Component({
    moduleId: module.id,
    templateUrl: '../../templates/signup/app.signup.component.html'
})

export class SignUpComponent implements OnInit {

    modelCandidat: User = new User();
    modelRecruter: User = new User();

    loadingRecruter = false;
    loadingCandidat = false;
    candidatError = '';
    recruterError = '';
    sectors: Object;

    constructor(
        private router: Router,
        private signupService: SignupService,
        private sectorsService: SectorsService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        // Init Sectors
        this.sectorsService.getSectors().subscribe(
                (result) => {
                    this.sectors = result;
                    console.log(this.sectors);
                },
                (err) => {
                    this.recruterError = err.json().error.message;
                    this.loadingRecruter = false;
                });
    }

    signupCandidat(model: User) {
        this.loadingCandidat = true;
        this.signupService.signupCandidat(model)
            .subscribe(
                result => {
                    this.loadingCandidat = false;
                },
                (err) => {
                    this.candidatError = err.json().error.message;
                    this.loadingCandidat = false;
                });
    }

    signupRecruter(model: User) {
        this.loadingRecruter = true;
        this.signupService.signupRecruter(model)
            .subscribe(
                result => {
                    this.loadingRecruter = false;
                },
                (err) => {
                    this.recruterError = err.json().error.message;
                    this.loadingRecruter = false;
                });
    }

    log(val: any) { console.log(val); }
}
