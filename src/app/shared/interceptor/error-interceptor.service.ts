import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {IMensseger} from "../model/imensseger";

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private menssegerService: IMensseger) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((erro: HttpErrorResponse) => this.processErrorResponse(erro)));
  }

  processErrorResponse(error: HttpErrorResponse): Observable<HttpEvent<any>> {
    this.menssegerService.error(error.message);
    return throwError(() => error);
  }

}
