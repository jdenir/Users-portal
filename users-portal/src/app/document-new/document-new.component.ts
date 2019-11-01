import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-document-new',
  templateUrl: './document-new.component.html',
  styleUrls: ['./document-new.component.scss']
})
export class DocumentNewComponent implements OnInit {

  file: File;

  constructor(private router: Router, private api: ApiService) { }


  ngOnInit() {
    
  }

  onChange(event){
    const selectedFile = <File>event.srcElement.files;
    document.getElementById('customFileLabel').innerHTML = selectedFile[0].name;
    this.file = selectedFile[0];
  }

  onUpload(){
    var author = (<HTMLInputElement>document.getElementById('authorInput')).value;
    if(this.file){
      this.api.upload(this.file, author)
        .subscribe(response => console.log("upload enviado"));
    }
  }
}
