import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IAlimentare } from '../alimentari/alimentari.component';
import { RestRequestService } from './rest-request.service';

@Injectable({
  providedIn: 'root'
})
export class AlimentareService {

  constructor(public restRequestService: RestRequestService) { }

  getAlimentari() {
    const headers = {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.restRequestService.get1( "http://localhost:8080/getAlimentari").pipe(tap(
            data =>{
            console.log(data)}
    ));
  }

  getListaAlimentariPerMonth() {
    const headers = {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.restRequestService.get1( "http://localhost:8080/getAlimentariPerMonth").pipe(tap(
            data =>{
            console.log(data)}
    ));
  }

  addAlimentare(data:IAlimentare){
    // masina/create
    return this.restRequestService.postAlimentare( "http://localhost:8080/alimentare/create",data).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  updateAlimentare(data:IAlimentare){
    // masina/create
    return this.restRequestService.put( "http://localhost:8080/alimentare/update",data).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }  
  deleteAlimentare(id:string){
    // masina/create
    return this.restRequestService.delete( "http://localhost:8080/alimentare/delete?id="+id).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }  


  
}
