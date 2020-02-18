import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Chaussure } from '../models/chaussure';


@Injectable({
  providedIn: 'root'
})
export class ChaussureService {
  public marques: string[] = ['Adidas', 'Nike', 'Puma'];
  public types: string[] = ['Sport', 'Ville', 'Football'];
 
  public _url: string = "http://localhost:3000/chaussure";
  constructor(private _httpClient: HttpClient) { }

  getChaussures(): Observable<Chaussure[]>{
    return this._httpClient.get<Chaussure[]>(this._url).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getChaussureById(_id: number): Observable<Chaussure>{
    return this._httpClient.get<Chaussure>(`${this._url}/${_id}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  addChaussure(_chaussure: Chaussure): Observable<Chaussure>{
    return this._httpClient.post<Chaussure>(this._url, _chaussure).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  updateChaussure(_chaussure: Chaussure): Observable<Chaussure>{
    return this._httpClient.put<Chaussure>(`${this._url}/${_chaussure.id}`, _chaussure).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  deleteChaussure(_chaussure: Chaussure){
    return this._httpClient.delete<Chaussure>(`${this._url}/${_chaussure.id}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  errorHandler(_error: HttpErrorResponse) {
    if (_error.error instanceof ErrorEvent) { // Get client-side error
      console.error(`A client side error occurred: ${ _error.error.message}`);
    } else { // Get server-side error
      console.error(
        `Backend returned code ${_error.status}, ` +
        `body was: ${_error.error}`);
    }
    return throwError(`Something bad happened (error code: ${_error.status}); please try again later.`);
  }

}
