import { Component, Input, OnInit } from '@angular/core';


export enum CHART_TYPES {
  BAR = 'bar',
  DOUGHNUT = 'doughnut'
}

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  @Input() title: string;
  @Input() desc: string;
  @Input() type: CHART_TYPES;
  @Input() data: { labels: string[]; datasets: any[] };
  chartParams: Object;

  constructor() {
    this.chartParams = {
      data: this.data,
      options: {
        title: {
          display: false,
        },
        tooltips: {
          intersect: false,
          mode: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        barRadius: 4,
        scales: {
          xAxes: [{
            display: false,
            gridLines: false,
            stacked: true
          }],
          yAxes: [{
            display: false,
            stacked: true,
            gridLines: false
          }]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      }
    };
  }

  ngOnInit(){}

}
