import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

// import { MessageService } from './message.service';

import { ILine } from './line';

@Injectable()
export class LineParameterService {
  filterBy: string = '';
  displayStops = false;
}

@Injectable()
export class LineService {
  private moviesUrl: string = 'api/lines';
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  getLines(): Observable<ILine[]> {
    return this.http.get<ILine[]>(this.moviesUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getLineByNumber(id: number) {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<ILine>(url).pipe(
      tap(data => console.log('Data: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  deleteLine(id: number): Observable<{}> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.delete<ILine>(url, { headers: this.headers }).pipe(
      tap(data => console.log('deleteLine: ' + id)),
      catchError(this.handleError)
    );
  }

  saveLine(movie: ILine): Observable<ILine> {
    if (movie.id === 0) {
      return this.createLine(movie, this.headers);
    } else {
      return this.updateLine(movie, this.headers);
    }
  }

  private createLine(movie: ILine, headers: HttpHeaders): Observable<ILine> {
    movie.id = undefined;
    return this.http.post<ILine>(this.moviesUrl, movie, { headers }).pipe(
      tap(data => console.log('createLine: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private updateLine(movie: ILine, headers: HttpHeaders): Observable<ILine> {
    const url = `${this.moviesUrl}/${movie.id}`;
    return this.http.put<ILine>(url, movie, { headers }).pipe(
      tap(data => console.log('updateLine: ' + movie.id)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, body was: ${
        err.error
      }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
