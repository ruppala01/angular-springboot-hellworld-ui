import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.authenticationService.logOut();
    this.router.navigate(['']);
  }

}
