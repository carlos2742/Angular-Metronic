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
    if (!this.data) {
        this.data = {
          labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9', 'Label 10', 'Label 11', 'Label 12', 'Label 13', 'Label 14', 'Label 15', 'Label 16'],
          datasets: [
            {
              // label: 'dataset 1',
              backgroundColor: '#43bfa3',
              data: [
                15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10, 15, 20
              ]
            }, {
              // label: 'dataset 2',
              backgroundColor: '#f3f3fb',
              data: [
                15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10, 15, 20
              ]
            }
          ]
        };
    }

    this.initChartJS();
  }

  private initChartJS() {
    this.chartParams['type'] = 'bar';
    this.chartParams['data'] = this.data;

    const chart = new Chart(this.chart.nativeElement, this.chartParams);
  }

}
