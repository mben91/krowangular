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
var router_1 = require('@angular/router');
var user_auth_service_1 = require('../../services/user.auth.service');
var sectors_service_1 = require('../../services/sectors.service');
var forms_1 = require('@angular/forms');
var User_1 = require('../../models/User');
var SignUpComponent = (function () {
    function SignUpComponent(router, signupService, sectorsService, formBuilder) {
        this.router = router;
        this.signupService = signupService;
        this.sectorsService = sectorsService;
        this.formBuilder = formBuilder;
        this.modelCandidat = new User_1.User();
        this.modelRecruter = new User_1.User();
        this.loadingRecruter = false;
        this.loadingCandidat = false;
        this.candidatError = '';
        this.recruterError = '';
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init Sectors
        this.sectorsService.getSectors().subscribe(function (result) {
            _this.sectors = result;
            console.log(_this.sectors);
        }, function (err) {
            _this.recruterError = err.json().error.message;
            _this.loadingRecruter = false;
        });
    };
    SignUpComponent.prototype.signupCandidat = function (model) {
        var _this = this;
        this.loadingCandidat = true;
        this.signupService.signupCandidat(model)
            .subscribe(function (result) {
            _this.loadingCandidat = false;
        }, function (err) {
            _this.candidatError = err.json().error.message;
            _this.loadingCandidat = false;
        });
    };
    SignUpComponent.prototype.signupRecruter = function (model) {
        var _this = this;
        this.loadingRecruter = true;
        this.signupService.signupRecruter(model)
            .subscribe(function (result) {
            _this.loadingRecruter = false;
        }, function (err) {
            _this.recruterError = err.json().error.message;
            _this.loadingRecruter = false;
        });
    };
    SignUpComponent.prototype.log = function (val) { console.log(val); };
    SignUpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '../../templates/signup/app.signup.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_auth_service_1.SignupService, sectors_service_1.SectorsService, forms_1.FormBuilder])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=app.signup.component.js.map