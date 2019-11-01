import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Document } from 'src/app/model/document';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://localhost:5001/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDocuments (): Observable<Document[]> {
    const url = `${apiUrl}document-xlsx`
    return this.http.get<Document[]>(url)
      .pipe(
        tap(documents => console.log('leu os documentos')),
        catchError(this.handleError('getDocuments', []))
      );
  }

  getDocument(id: number): Observable<Document> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Document>(url).pipe(
      tap(_ => console.log(`leu o documento id=${id}`)),
      catchError(this.handleError<Document>(`getDocumet id=${id}`))
    );
  }

  addDocument (document): Observable<Document> {
    return this.http.post<Document>(apiUrl, document, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((document: Document) => console.log(`adicionou o documento com w/ id=${document._id}`)),
      catchError(this.handleError<Document>('addDocument'))
    );
  }

  updateDocument(id, document): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, document, httpOptions).pipe(
      tap(_ => console.log(`atualiza o documento com id=${id}`)),
      catchError(this.handleError<any>('updateDocument'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
