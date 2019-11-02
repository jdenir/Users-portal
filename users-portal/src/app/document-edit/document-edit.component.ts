import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Document } from 'src/app/model/document';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.scss']
})
export class DocumentEditComponent implements OnInit {
  id: number = null;
  dataSource: Document;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getDocument(this.route.snapshot.params['id']);
  }

  getDocument(id) {
    this.api.getDocument(id).subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  onNotAuthorize(){
    this.dataSource.authorization = 1;
    this.api.updateDocument(this.dataSource)
      .subscribe(response => {
        this.router.navigate(['/documents']);
      })
  }

  onAuthorize(){
    this.dataSource.authorization = 2;
  this.api.updateDocument(this.dataSource)
      .subscribe(response => {
        this.router.navigate(['/documents']);
      })
  }
}
