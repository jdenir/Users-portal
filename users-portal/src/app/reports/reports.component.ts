import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Report } from '../model/report';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  dataSource: Report;
  isLoadingResults = true;
  recordEntered: number = 0;
  recordUpdated: number = 0;
  recordSkipped: number = 0;
  recordFailed: number = 0;

  constructor(private _api: ApiService) { 
    
  }

  ngOnInit() {
    this._api.getReports()
    .subscribe(res => {
      this.recordEntered = res.recordEntered;
      this.recordFailed = res.recordFailed;
      this.recordSkipped = res.recordSkipped;
      this.recordUpdated = res.recordUpdated;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
