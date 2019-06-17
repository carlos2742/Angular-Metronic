import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import {CHART_TYPES} from '../charts.component';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {

  @Input() title: string;
  @Input() data: { labels: string[]; datasets: any[] };
  @ViewChild('chart') chart: ElementRef;
  @Input() chartParams: Object;
  legend: string;

  constructor() { }

  ngOnInit() {
    this.initChartJS();
  }

  private initChartJS() {
    this.chartParams['type'] = CHART_TYPES.DOUGHNUT;
    this.chartParams['options']['cutoutPercentage'] = 70;
    this.chartParams['options']['legendCallback'] = this.buildLegend;
    this.chartParams['data'] = this.data;

    const chart = new Chart(this.chart.nativeElement, this.chartParams);

    this.legend = chart.generateLegend();
  }

  private buildLegend(chart) {
    const text = [];
    const dataset = chart.data.datasets[0];
    const total = dataset.data.reduce((accumulator, currentValue) => accumulator + currentValue);
    for (let i = 0; i < dataset.data.length; i++) {
      const label = chart.data.labels[i];
      const color = dataset.ktBackgroundColor[i];
      const percent = Math.round(dataset.data[i] * 100 / total);
      text.push(`<div class="kt-widget14__legend pt-0 pb-2"><span class="kt-widget14__bullet ${color}"></span><span class="kt-widget14__stats">${percent}% ${label}</span></div>`);
    }
    return text.join('');
  }

}
