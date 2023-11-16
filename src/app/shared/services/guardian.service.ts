import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Guardian } from "../model/guardian";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {

  GUARDIAN_API = 'http://localhost:3000/guardians';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Guardian[]> {
    return this.httpClient.get<Guardian[]>(this.GUARDIAN_API).pipe(
      catchError(this.handleError)
    );
  }

  register(guardian: Guardian): Observable<Guardian> {
    return this.httpClient.post<Guardian>(this.GUARDIAN_API, guardian).pipe(
      catchError(this.handleError)
    );
  }

  delete(guardian: Guardian): Observable<any> {
    return this.httpClient.delete(`${this.GUARDIAN_API}/${guardian.id}`).pipe(
      catchError(this.handleError)
    );
  }

  update(guardian: Guardian): Observable<Guardian> {
    return this.httpClient.put<Guardian>(`${this.GUARDIAN_API}/${guardian.id}`, guardian).pipe(
      catchError(this.handleError)
    );
  }

  searchById(id: string): Observable<Guardian> {
    return this.httpClient.get<Guardian>(`${this.GUARDIAN_API}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
