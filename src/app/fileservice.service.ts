import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { FileDTO } from './file-dto';

@Injectable({
  providedIn: 'root'
})
export class FileserviceService {
  apiURL ='http://localhost:1000/api/v1/files/';
  
  constructor(private http: HttpClient) { }

httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  


  getdata(): Observable<FileDTO> {
    return this.http.get<FileDTO>(this.apiURL)
   .pipe(
      retry(1),
      catchError(this.handleError)
    ) 
  }  

  getdataById(id:string): Observable<FileDTO> {
    return this.http.get<FileDTO>(this.apiURL+id)
   .pipe(
      retry(1),
      catchError(this.handleError)
    ) 
  }  

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
