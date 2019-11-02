import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Document } from 'src/app/model/document';
import { Report } from './model/report';
import { User } from './model/user';

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

  getReports (): Observable<Report[]> {
    const url = `${apiUrl}report`
    return this.http.get<Report[]>(url)
      .pipe(
        tap(documents => console.log('leu os reports')),
        catchError(this.handleError('getReports', []))
      );
  }

  getUsers (): Observable<User[]> {
    const url = `${apiUrl}user`
    return this.http.get<User[]>(url)
      .pipe(
        tap(documents => console.log('leu os usuarios')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getDocument(id: number): Observable<Document> {
    const url = `${apiUrl}document-xlsx/${id}`;
    return this.http.get<Document>(url).pipe(
      tap(_ => console.log(`leu o documento id=${id}`)),
      catchError(this.handleError<Document>(`getDocumet id=${id}`))
    );
  }

  upload(fileDoc: File, authorDoc: string){
    const formData = new FormData();
    var documentUp = new Document();
    documentUp.author = authorDoc;
    documentUp.file = fileDoc;
    const url = `${apiUrl}document-xlsx/upload-file`;
    formData.append('File', fileDoc);
    formData.append('Author', authorDoc);
    console.log(fileDoc.name);
    const request = new HttpRequest('POST', url, formData);
    return this.http.request(request);
  }

  updateDocument(document): Observable<any> {
    const url = `${apiUrl}document-xlsx`;
    return this.http.put(url, document, httpOptions).pipe(
      tap(_ => console.log(`atualiza o documento com id=${document.id}`)),
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
