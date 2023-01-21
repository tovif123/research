import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PieBalanceComponent } from './shared/components/pie-balance/pie-balance.component';
import { TableBalanceComponent } from './shared/components/table-balance/table-balance.component';
import { MaterialModule } from './shared/material.module';
import { NgChartsModule } from 'ng2-charts';
import { TableGrantsComponent } from './shared/components/table-grants/table-grants.component';
import { BalancesComponent } from './pages/balances/balances.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PieBalanceComponent,
    TableBalanceComponent,
    TableGrantsComponent,
    BalancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MaterialModule,
    FlexLayoutModule
   // NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
