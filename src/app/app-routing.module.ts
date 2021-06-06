import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { ClientComponent } from './component/home/client/client.component';
import { DashboardComponent } from './component/home/dashboard/dashboard.component';
import { AdvTaxComponent } from './component/home/dashboard/document/adv-tax/adv-tax.component';
import { AllDocComponent } from './component/home/dashboard/document/all-doc/all-doc.component';
import { DocumentComponent } from './component/home/dashboard/document/document.component';
import { EsiPfDocComponent } from './component/home/dashboard/document/esi-pf-doc/esi-pf-doc.component';
import { GstDocComponent } from './component/home/dashboard/document/gst-doc/gst-doc.component';
import { IncTaxComponent } from './component/home/dashboard/document/inc-tax/inc-tax.component';
import { TcsDocComponent } from './component/home/dashboard/document/tcs-doc/tcs-doc.component';
import { TdsDocComponent } from './component/home/dashboard/document/tds-doc/tds-doc.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '' , component: AuthComponent },
  { path: 'home' , component: HomeComponent,
    children: [
      {
          path: '', redirectTo: 'screen', pathMatch: 'full'
      },
      {
          path: 'screen', component: DashboardComponent,
          children: [
            { path: '' , redirectTo: 'doc', pathMatch: 'full' },
            { path: 'doc' , component: DocumentComponent,
              children: [
                { path: '' , redirectTo: 'all', pathMatch: 'full' },
                { path: 'all', component: AllDocComponent},
                { path: 'gst', component: GstDocComponent},
                { path: 'tds', component: TdsDocComponent},
                { path: 'tcs', component: TcsDocComponent},
                { path: 'esiPf', component: EsiPfDocComponent},
                { path: 'atax', component: AdvTaxComponent},
                { path: 'itax', component: IncTaxComponent},
              ]
            },
          ]
      },
      {
        path: 'client', component: ClientComponent
      },
  ]
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
