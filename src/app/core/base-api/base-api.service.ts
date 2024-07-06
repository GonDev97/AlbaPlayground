import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '@core/constants/BASE_URL';

export interface ExportOptions {
  url: string;
  filename: string;
  downloadDirectly: boolean;
  options?: object;
  dateStart?: string;
  dateEnd?: string;
}

export class BaseApiService {
  private baseUrl: string;
  public httpClient: HttpClient = inject(HttpClient);
  constructor(
    protected baseApi: string = '',
  ) {
    this.baseUrl = BASE_URL + baseApi;
  }
  public get<T>(url: string = '', options?: object): Observable<T> {
    url = this.baseUrl + url;
    
    return this.httpClient.get<T>(url, options);
  }
}
