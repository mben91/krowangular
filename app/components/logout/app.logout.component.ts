import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    moduleId    : module.id,
    template    : ``
})

export class LogoutComponent implements OnInit {
    constructor(
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
}
