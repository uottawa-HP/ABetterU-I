import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  constructor(private http: HttpClient) { }

  //retrieve resources.json from express
  getData(){
    let url = "http://localhost:3000/users";
    return this.http.get(url);
  }
}
