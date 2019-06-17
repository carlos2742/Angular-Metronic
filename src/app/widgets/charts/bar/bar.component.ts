import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import {CHART_TYPES} from '../charts.component';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() title: string;
  @Input() desc: string;
  @Input() data: { labels: string[]; datasets: any[] };
  @Input() chartParams: Object;
  @ViewChild('chart') chart: ElementRef;

  constructor() { }

  ngOnInit() {
    this.initChartJS();
  }

  private initChartJS() {
    this.chartParams['type'] = CHART_TYPES.BAR;
    this.chartParams['data'] = this.data;

    const chart = new Chart(this.chart.nativeElement, this.chartParams);
  }

}
