import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RestRequestService } from './rest-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public restRequestService: RestRequestService) { }


  login(email: string, password: string) {
    let postData = {email : email, password : password};
    console.log('Request is sent!');
    // Using the POST method 
    const headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.restRequestService.get1( "http://localhost:8080/login?user="+email+"&password="+password).pipe(tap(
              data =>{
              console.log(data)}
            ));
  }
  login2(email: string, password: string) {
    let postData = {email : email, password : password};
    console.log('Request is sent!');
    // Using the POST method 
    const headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.restRequestService.postAny( "http://localhost:8080/login", {
      userName: email,
      password: password
  }).pipe(tap(
              data =>{
              console.log(data)}
            ));
  }

}
