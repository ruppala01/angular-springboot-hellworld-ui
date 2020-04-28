import { Component, OnInit } from '@angular/core';
import{AuthenticationService} from '../service/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  
  constructor( private authenticationService:AuthenticationService){ }
  
  ngOnInit(): void {
   
    
  }
  isLoggedIn(){
    return this.authenticationService.isUserLoggedIn();
  }

}
