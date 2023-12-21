import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Professor } from "../model/professor";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  PROFESSOR_API = environment.URL_API + '/professors';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>(this.PROFESSOR_API)
  }

  register(professor: Professor): Observable<Professor> {
    return this.httpClient.post<Professor>(this.PROFESSOR_API, professor)
  }

  delete(professor: Professor): Observable<any> {
    return this.httpClient.delete(`${this.PROFESSOR_API}/${professor.id}`)
  }

  update(professor: Professor): Observable<Professor> {
    return this.httpClient.put<Professor>(`${this.PROFESSOR_API}/${professor.id}`, professor)
  }

  searchById(id: string): Observable<Professor> {
    return this.httpClient.get<Professor>(`${this.PROFESSOR_API}/${id}`)
  }

}
