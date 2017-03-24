import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/Company';
import { CompanyService } from '../../services/company.service';
import { KeysPipe } from '../../pipes/keys.pipe';

@Component({
    moduleId: module.id,
    templateUrl: `../../templates/company/app.company.component.html`,
    providers: [ CompanyService, KeysPipe ]
})

export class CompanyComponent implements OnInit {
    companies: Company[] = [];

    constructor(private companyService: CompanyService) { }

    ngOnInit() {
        // get companies from secure api end point
        this.companyService.getCompanies()
            .subscribe(companies => {
                this.companies = companies;
            });
    }
}
