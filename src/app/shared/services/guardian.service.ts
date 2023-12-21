import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Guardian } from "../model/guardian";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {

  GUARDIAN_API = environment.URL_API + '/guardians';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Guardian[]> {
    return this.httpClient.get<Guardian[]>(this.GUARDIAN_API)
  }

  register(guardian: Guardian): Observable<Guardian> {
    return this.httpClient.post<Guardian>(this.GUARDIAN_API, guardian)
  }

  delete(guardian: Guardian): Observable<any> {
    return this.httpClient.delete(`${this.GUARDIAN_API}/${guardian.id}`)
  }

  update(guardian: Guardian): Observable<Guardian> {
    return this.httpClient.put<Guardian>(`${this.GUARDIAN_API}/${guardian.id}`, guardian)
  }

  searchById(id: string): Observable<Guardian> {
    return this.httpClient.get<Guardian>(`${this.GUARDIAN_API}/${id}`)
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
