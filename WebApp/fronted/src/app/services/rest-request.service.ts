import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICursa } from '../cursa/cursa.component';
import { IDriver } from '../dashboard/dashboard.component';
import { ICar } from '../dialog-box/dialog-box.component';
import { IAlimentare } from '../alimentari/alimentari.component';

@Injectable({
  providedIn: 'root'
})
export class RestRequestService {
  baseUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  get(url): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${url}`);
  }

  post(url): Observable<any> {
    return this.http.post(`${this.baseUrl}/${url}`, "");
  }
  postAny(url, data:any): Observable<any> {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': 'http://localhost:8080' }) };
    return this.http.post(url, data);
  }
  post1(url, data:ICar): Observable<any> {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': 'http://localhost:8080' }) };
    return this.http.post(url, data);
  }
  postDriver(url, data:IDriver): Observable<any> {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': 'http://localhost:8080' }) };
    return this.http.post(url, data);
  }
  postCursa(url, data:ICursa): Observable<any> {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': 'http://localhost:8080' }) };
    return this.http.post(url, data);
  }
  postAlimentare(url, data:IAlimentare): Observable<any> {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': 'http://localhost:8080' }) };
    return this.http.post(url, data);
  }
  get1(url1: string): Observable<HttpErrorResponse|any> {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': 'http://localhost:8080' }) };
    return this.http.get(url1, headers);
  }
  put(url1: string, data:any): Observable<HttpErrorResponse|any> {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': 'http://localhost:8080' }) };
    return this.http.put(url1, data);
  }
  delete(url1: string): Observable<HttpErrorResponse|any> {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': 'http://localhost:8080' }) };
    return this.http.delete(url1, headers);
  }
}
