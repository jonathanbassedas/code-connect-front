import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first } from 'rxjs';
import { AppSettings } from '../../../appSettings';

@Injectable({
  providedIn: 'root'
})
export class CodigoService {

  url = AppSettings.API_ENDPOINT+'/codigos';
  constructor(private http: HttpClient) { }

    fetchAll(){
      return this.http.get<any>(`${this.url}`).pipe();
    }

}
