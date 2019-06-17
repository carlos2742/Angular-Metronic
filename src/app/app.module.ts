import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import { ChartsComponent } from './widgets/charts/charts.component';
import { BarComponent } from './widgets/charts/bar/bar.component';
import { DoughnutComponent } from './widgets/charts/doughnut/doughnut.component';
import { ListComponent } from './widgets/list/list.component';
import { AbbreviateNumberPipe } from './pipes/abbreviate-number.pipe';
import { UserProfileComponent } from './layouts/header/user-profile/user-profile.component';
import { ToggleClassDirective } from './directives/toggle-class.directive';
import { SubheaderComponent } from './layouts/subheader/subheader.component';
import { FiltersComponent } from './widgets/filters/filters.component';
import { DataTableComponent } from './widgets/data-table/data-table.component';
import { RowToggleDetailDirective } from './widgets/data-table/directives/row-toggle-detail.directive';
import {MockService} from './services/mock.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    FooterComponent,
    DashboardComponent,
    ChartsComponent,
    BarComponent,
    DoughnutComponent,
    ListComponent,
    AbbreviateNumberPipe,
    UserProfileComponent,
    ToggleClassDirective,
    SubheaderComponent,
    FiltersComponent,
    DataTableComponent,
    RowToggleDetailDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
