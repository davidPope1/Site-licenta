import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ICursa } from '../cursa/cursa.component';
import { RestRequestService } from './rest-request.service';

@Injectable({
  providedIn: 'root'
})
export class CursaService {
  constructor(public restRequestService: RestRequestService) { }

  getCurse() {
    const headers = {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.restRequestService.get1( "http://localhost:8080/getCurse").pipe(tap(
            data =>{
            console.log(data)}
    ));
  }

  getKmCursePeLuna() {
    const headers = {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.restRequestService.get1( "http://localhost:8080/getKmCursePerMonth").pipe(tap(
            data =>{
            console.log(data)}
    ));
  }

  getAlimentariForCurse(id:String) {
    const headers = {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.restRequestService.get1( "http://localhost:8080/getAlimentariCurse/"+id).pipe(tap(
            data =>{
            console.log(data)}
    ));
  }
  addCursa(data:ICursa){
    // masina/create
    return this.restRequestService.postCursa( "http://localhost:8080/cursa/create",data).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  updateCursa(data:ICursa){
    // masina/create
    return this.restRequestService.put( "http://localhost:8080/cursa/update",data).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }  
  deleteCursa(id:string){
    // masina/create
    return this.restRequestService.delete( "http://localhost:8080/cursa/delete?id="+id).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }  

}

