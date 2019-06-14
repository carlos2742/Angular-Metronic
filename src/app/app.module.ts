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
    AbbreviateNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
