"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_1 = require('./models/user');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Users';
        this.useres = [
            new user_1.User(1, "Windstorm", "me@example.com"),
            new user_1.User(13, "Bombasto", "me@example.com"),
            new user_1.User(15, "Magneta", "me@example.com"),
            new user_1.User(20, "Tornedo", "me@example.com")
        ];
        this.myUser = this.useres[0];
        this.clickMessage = '';
        this.errors = new Array();
    }
    AppComponent.prototype.clickme = function (event) {
        this.clickMessage = "hey you clicked me!";
        console.log("clicked");
        event.preventDefault();
    };
    AppComponent.prototype.addUser = function (event, username) {
        this.errors = new Array();
        if (username != '') {
            this.useres.push(new user_1.User(25, username, "me@example.com"));
        }
        else {
            this.errors.push({ name: 'username', description: 'username cannot be empty!' });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'myapp',
            templateUrl: 'app/templates/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map