import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-new-sub',
  templateUrl: './new-sub.component.html',
  styleUrls: ['./new-sub.component.css']
})
export class NewSubComponent implements OnInit {
 newSub: any;
 fileTopUpload : any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.newSub = this.fb.group({
      title:[''],
      theme:[''],
      authors:[''],
      file:[''],
    })
   }
  ngOnInit() {
  }
  fileUpload(event: any){
    console.log(event.target.files[0]);
     const formData : any = new FormData();
     this.fileTopUpload = event.target.files[0];
     //const file  :any = this.fileTopUpload;

    // console.log('form data variable :   '+ formData.toString());
     this.http.post('http://localhost:5000/api/others/file', this.fileTopUpload)
      .subscribe(files => console.log('files', files))
  }

}
