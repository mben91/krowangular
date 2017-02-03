import { Component } from '@angular/core';

import { User } from './models/user';

@Component({
    selector: 'myapp',
    templateUrl: 'app/templates/app.component.html'
})

export class AppComponent  {
    title = 'Users';

    useres = [
        new User(1, "Windstorm", "me@example.com"),
        new User(13, "Bombasto", "me@example.com"),
        new User(15, "Magneta", "me@example.com"),
        new User(20, "Tornedo", "me@example.com")
    ];

    myUser = this.useres[0];

    clickMessage = '';
    errors = new Array();

    clickme(event:any) {
        this.clickMessage = "hey you clicked me!";
        console.log("clicked");
        event.preventDefault();
    }

    addUser(event:any, username:string) {
        this.errors = new Array();
        if(username != '') {
            this.useres.push(new User(25, username, "me@example.com"));
        }
        else {
            this.errors.push({ name : 'username', description : 'username cannot be empty!' });
        }
    }
}
