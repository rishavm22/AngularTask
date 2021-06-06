import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './component/auth/auth.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/home/dashboard/dashboard.component';
import { ClientComponent } from './component/home/client/client.component';
import { DocumentComponent } from './component/home/dashboard/document/document.component';
import { AllDocComponent } from './component/home/dashboard/document/all-doc/all-doc.component';
import { GstDocComponent } from './component/home/dashboard/document/gst-doc/gst-doc.component';
import { TdsDocComponent } from './component/home/dashboard/document/tds-doc/tds-doc.component';
import { TcsDocComponent } from './component/home/dashboard/document/tcs-doc/tcs-doc.component';
import { EsiPfDocComponent } from './component/home/dashboard/document/esi-pf-doc/esi-pf-doc.component';
import { AdvTaxComponent } from './component/home/dashboard/document/adv-tax/adv-tax.component';
import { IncTaxComponent } from './component/home/dashboard/document/inc-tax/inc-tax.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    DashboardComponent,
    ClientComponent,
    DocumentComponent,
    AllDocComponent,
    GstDocComponent,
    TdsDocComponent,
    TcsDocComponent,
    EsiPfDocComponent,
    AdvTaxComponent,
    IncTaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
