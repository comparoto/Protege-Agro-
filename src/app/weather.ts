import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  private apiUrl = environment.apiUrl + '/api/clima';

  constructor(private http: HttpClient) { }

  buscarClima(cidade: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${cidade}`);
  }
  
  buscarPrevisao(cidade: string): Observable<any> {

    return this.http.get(`${this.apiUrl}/previsao/${cidade}`);
}
}