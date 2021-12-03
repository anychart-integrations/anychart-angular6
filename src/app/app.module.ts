/// <reference path="../../node_modules/anychart/dist/index.d.ts"/>


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoDataProviderService } from './demo-data-provider.service';
import { AppRoutingModule } from './/app-routing.module';
import { FirstChartComponent } from './first-chart/first-chart.component';
import { SecondChartComponent } from './second-chart/second-chart.component';


@NgModule({
   declarations: [
      AppComponent,
      FirstChartComponent,
      SecondChartComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
   ],
   providers: [
      DemoDataProviderService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
