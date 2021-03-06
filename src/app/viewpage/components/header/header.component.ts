import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn:boolean;
  constructor(
    private Auth : AuthenticationService,
  ) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.loggedIn = true;
    }
  }

}
