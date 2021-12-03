import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DemoDataProviderService } from '../demo-data-provider.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-first-chart',
  templateUrl: './first-chart.component.html',
  styleUrls: ['./first-chart.component.css']
})
export class FirstChartComponent implements OnInit {

  subscription: Subscription;

  constructor(private dataService_: DemoDataProviderService) { }

  @ViewChild('chartContainer') container;

  chart: anychart.charts.CircularGauge = null;

  ngOnInit() {
    anychart.graphics.useAbsoluteReferences(false);

    this.chart = anychart.gauges.circular();

    this.chart
      .padding(0)
      .startAngle(270)
      .sweepAngle(180);
    const axis = this.chart.axis()
      .radius(95)
      .width(0);
    axis.scale()
      .minimum(50)
      .maximum(100)
      .ticks({ interval: 10 });
    this.chart.needle()
      .startRadius('5%')
      .endRadius('75%')
      .middleRadius(0)
      .startWidth('0.6%')
      .endWidth('0.4%')
      .fill('white')
      .stroke('white');
    this.chart.cap()
      .radius('3%')
      .enabled(true);
    this.chart.bar(0)
      .axisIndex(1)
      .position('inside')
      .dataIndex(0)
      .width(3)
      .radius(60)
      .zIndex(10);
    this.chart.cap()
      .radius('3%')
      .fill('white')
      .stroke('white');
    this.chart.range(1, {
      from: 50,
      to: 80,
      fill: { keys: ['#ff0000', '#FF4500'] },
      position: 'inside',
      radius: 100,
      stroke: null,
      endSize: '30%',
      startSize: '30%',
      zIndex: 3
    });
    this.chart.range(2, {
      from: 80,
      to: 95,
      fill: { keys: ['#FFA500', '#FFAE42', '#FFFF00'] },
      position: 'inside',
      radius: 100,
      stroke: null,
      endSize: '30%',
      startSize: '30%',
      zIndex: 3
    });
    this.chart.range(3, {
      from: 95,
      to: 100,
      fill: { keys: ['#ADFF2F', '#008000'] },
      position: 'inside',
      radius: 100,
      stroke: null,
      endSize: '30%',
      startSize: '30%',
      zIndex: 3
    });
    this.chart.data([72.5]);
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  }

}
