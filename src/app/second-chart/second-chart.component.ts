import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { DemoDataProviderService } from '../demo-data-provider.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-second-chart',
  templateUrl: './second-chart.component.html',
  styleUrls: ['./second-chart.component.css']
})
export class SecondChartComponent implements OnInit, AfterViewInit {

  subscription: Subscription;

  constructor(private dataService_: DemoDataProviderService) {}

  @ViewChild('chartContainer') container;

  chart: anychart.charts.Gantt = null;
  timeline: anychart.core.ui.Timeline;

  ngOnInit() {
    anychart.graphics.useAbsoluteReferences(false);

    this.chart = anychart.ganttResource();
    this.chart.title('Second Chart');
  }

  ngAfterViewInit() {
    this.dataService_.getData()
      .then(res => res.json())
      .then(data => {
        this.chart.data(data);
        this.chart.container(this.container.nativeElement);
        this.chart.draw();
      });
    }

}
