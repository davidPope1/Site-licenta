import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ICar } from '../dialog-box/dialog-box.component';
import { RestRequestService } from './rest-request.service';

@Injectable({
  providedIn: 'root'
})
export class MasinaService {
  constructor(public restRequestService: RestRequestService) { }

  getMasini() {
    const headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.restRequestService.get1( "http://localhost:8080/getMasini").pipe(tap(
              data =>{
              console.log(data)}
            ));
  }

  getNumarCarburantMasini() {
    const headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
    return this.restRequestService.get1( "http://localhost:8080/getNumarCarburantiMasini").pipe(tap(
              data =>{
              console.log(data)}
            ));
  }

  addMasina(data:ICar){
    // masina/create
    return this.restRequestService.post1( "http://localhost:8080/masina/create",data).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  
  updateMasina(data:ICar){
    // masina/create
    return this.restRequestService.put( "http://localhost:8080/masina/update",data).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }  

  deleteMasina(id:string){
    // masina/create
    return this.restRequestService.delete( "http://localhost:8080/masina/delete?id="+id).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }  
}
