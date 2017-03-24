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
var company_service_1 = require('../../services/company.service');
var keys_pipe_1 = require('../../pipes/keys.pipe');
var CompanyComponent = (function () {
    function CompanyComponent(companyService) {
        this.companyService = companyService;
        this.companies = [];
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get companies from secure api end point
        this.companyService.getCompanies()
            .subscribe(function (companies) {
            _this.companies = companies;
        });
    };
    CompanyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "../../templates/company/app.company.component.html",
            providers: [company_service_1.CompanyService, keys_pipe_1.KeysPipe]
        }), 
        __metadata('design:paramtypes', [company_service_1.CompanyService])
    ], CompanyComponent);
    return CompanyComponent;
}());
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=app.company.component.js.map