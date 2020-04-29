import { Injectable } from '@angular/core';
import {HttpClientService} from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

   isValidUser:boolean=false;

  constructor(private httpClient:HttpClientService) { }

  authenticate(username, password) {
    this.httpClient.validateUser(username, password).subscribe(response=>this.handleSuccessResponse(response),)
    // if (username === "ruppala" && password === "password") {
    //   sessionStorage.setItem('username', username)
    //   return true;
    // } else {
    //   return false;
    // }

    if (this.isValidUser) {
        sessionStorage.setItem('username', username)
      } else {
      }
    return this.isValidUser;

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  handleSuccessResponse(response){
    if(response.status=="User validated succesfully"){
      this.isValidUser=true;
    }else{
      this.isValidUser=false;
    }
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
