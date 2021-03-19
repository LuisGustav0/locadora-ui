import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class HttpClientService {

  private baseUrl: string = 'api';

  constructor (private http: HttpClient) {
  }

  private getUrlCreate (resource: string): string {
    return `${this.baseUrl}/${resource}`;
  }

  private getUrlUpdate (resource: string, id: number): string {
    return `${this.baseUrl}/${resource}/${id}`;
  }

  private getUrlSearch (resource: string): string {
    return `${this.baseUrl}/${resource}`;
  }

  private getUrlDelete (resource: string, id: number): string {
    return `${this.baseUrl}/${resource}/${id}`;
  }

  post (resource: string, entity: any): Observable<any> {
    const url = this.getUrlCreate(resource);

    return this.http.post(url, entity);
  }

  put (resource: string, id: number, entity: any): Observable<any> {
    const url = this.getUrlUpdate(resource, id);

    return this.http.post(url, entity);
  }

  delete (resource: string, id: number): Observable<any> {
    const url = this.getUrlDelete(resource, id);

    return this.http.delete(url);
  }

  get (resource: string): Observable<any> {
    const url = this.getUrlSearch(resource);

    return this.http.get(url);
  }
}
