import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FirstChartComponent} from './first-chart/first-chart.component';
import {SecondChartComponent} from './second-chart/second-chart.component';

const routes: Routes = [
  { path: 'Circular Gauge', component: FirstChartComponent },
  { path: 'Gantt Chart', component: SecondChartComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
