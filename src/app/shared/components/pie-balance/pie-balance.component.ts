import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-balance',
  templateUrl: './pie-balance.component.html',
  styleUrls: ['./pie-balance.component.scss']
})
export class PieBalanceComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>|any;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43],
      chart: {
        type: "donut"
      },
      labels: ["מענק 1", "מענק 2", "מענק 3", "מענק 4",],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  
}
