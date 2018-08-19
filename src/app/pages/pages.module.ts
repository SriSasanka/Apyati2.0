import {PagesComponent} from './pages.component';
import {NgModule} from '@angular/core';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesCoreDependencyService} from '../core/pages-core-dependency.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ScreensMasterComponent } from './screens-master/screens-master.component';
import { RolesMasterComponent } from './roles-master/roles-master.component';
import { LoginUserMasterComponent } from './login-user-master/login-user-master.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MigrationMasterComponent } from './migration-master/migration-master.component';
import { DailyCashBookComponent } from './daily-cash-book/daily-cash-book.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { BillingSummaryComponent } from './billing-summary/billing-summary.component';
import { ReferralDetailsComponent } from './referral-details/referral-details.component';
import { TestStatisticsComponent } from './test-statistics/test-statistics.component';
import { AbnormalReportsComponent } from './abnormal-reports/abnormal-reports.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { BillingComponent } from './billing/billing.component';
import { SearchComponent } from './search/search.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { SearchBillComponent } from './search-bill/search-bill.component';
import { ResultsEntryComponent } from './results-entry/results-entry.component';
import { PrinteditReportsComponent } from './printedit-reports/printedit-reports.component';
import { CompanyComponent } from './company/company.component';
import { TariffComponent } from './tariff/tariff.component';
import { HeaderFormatterComponent } from './header-formatter/header-formatter.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { ExternalLabDetailsComponent } from './external-lab-details/external-lab-details.component';
import { SampleCollectionsComponent } from './sample-collections/sample-collections.component';
import { DepartmentComponent } from './department/department.component';
import { AgeMasterComponent } from './age-master/age-master.component';
import { TestGroupComponent } from './test-group/test-group.component';
import { SubGroupComponent } from './sub-group/sub-group.component';
import { TestSampleTypeComponent } from './test-sample-type/test-sample-type.component';
import { MethodComponent } from './method/method.component';
import { TestTimingsComponent } from './test-timings/test-timings.component';
import { LabTestsComponent } from './lab-tests/lab-tests.component';
import { TestProfilesComponent } from './test-profiles/test-profiles.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { ReportTemplateInternalComponent } from './report-template-internal/report-template-internal.component';
import { ReportFormatComponent } from './report-format/report-format.component';
import { SetupMasterComponent } from './setup-master/setup-master.component';
import { ReportDoctorsComponent } from './report-doctors/report-doctors.component';
import { AbnormalityReportsComponent } from './abnormality-reports/abnormality-reports.component';
const PAGES_COMPONENTS = [
  PagesComponent
];
@NgModule({
  imports: [
    PagesRoutingModule,
    PagesCoreDependencyService,
    NgbModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ScreensMasterComponent,
    RolesMasterComponent,
    LoginUserMasterComponent,
    ResetPasswordComponent,
    MigrationMasterComponent,
    DailyCashBookComponent,
    BillingDetailsComponent,
    BillingSummaryComponent,
    ReferralDetailsComponent,
    TestStatisticsComponent,
    AbnormalReportsComponent,
    RegisterPatientComponent,
    BillingComponent,
    SearchComponent,
    SearchPatientComponent,
    SearchBillComponent,
    ResultsEntryComponent,
    PrinteditReportsComponent,
    CompanyComponent,
    TariffComponent,
    HeaderFormatterComponent,
    DoctorDetailsComponent,
    ExternalLabDetailsComponent,
    SampleCollectionsComponent,
    DepartmentComponent,
    AgeMasterComponent,
    TestGroupComponent,
    SubGroupComponent,
    TestSampleTypeComponent,
    MethodComponent,
    TestTimingsComponent,
    LabTestsComponent,
    TestProfilesComponent,
    DemographicsComponent,
    ReportTemplateInternalComponent,
    ReportFormatComponent,
    SetupMasterComponent,
    ReportDoctorsComponent,
    AbnormalityReportsComponent,
  ]
})
export class PagesModule {}
