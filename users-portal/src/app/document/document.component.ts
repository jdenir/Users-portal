import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Document } from '../model/document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  displayedColumns: string[] = [ 'docName', 'author', 'creationDate', 'authorization', 'action' ];
  dataSource: Document[];
  isLoadingResults = true;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getDocuments()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
