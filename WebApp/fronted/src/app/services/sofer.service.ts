import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IDriver } from '../dashboard/dashboard.component';
import { RestRequestService } from './rest-request.service';

@Injectable({
  providedIn: 'root'
})
export class SoferService {
  constructor(public restRequestService: RestRequestService) { }

  getSoferi() {
    const headers = {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.restRequestService.get1( "http://localhost:8080/getSoferi").pipe(tap(
            data =>{
            console.log(data)}
    ));
  }
  getMasiniForSoferi(id:String) {
    const headers = {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.restRequestService.get1( "http://localhost:8080/getMasiniSofer/"+id).pipe(tap(
            data =>{
            console.log(data)}
    ));
  }
  getMasinaForAlimentare(id:String) {
    const headers = {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.restRequestService.get1( "http://localhost:8080/getMasiniByAlimentareId/"+id).pipe(tap(
            data =>{
            console.log(data)}
    ));
  }

  addSofer(data:IDriver){
    // masina/create
    return this.restRequestService.postDriver( "http://localhost:8080/sofer/create",data).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  updateSofer(data:IDriver){
    // masina/create
    return this.restRequestService.put( "http://localhost:8080/sofer/update",data).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }  
  deleteSofer(id:string){
    // masina/create
    return this.restRequestService.delete( "http://localhost:8080/sofer/delete?id="+id).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }  

}

