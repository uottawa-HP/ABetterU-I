import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fbForm } from '../models/fbForm';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  _url = 'https://systemnavdb.herokuapp.com/feedback';
  constructor(private _http: HttpClient) { }

  enroll (form: fbForm) {
    return this._http.post<any>(this._url, form)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }

  public idNumber : Number;
  public preselected : String; 



}
