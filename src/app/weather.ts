import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // IMPORTANTE: Coloque a URL do seu backend no Render aqui
  private apiUrl = 'https://protege-agro-back.onrender.com';

  constructor(private http: HttpClient) { }

  buscarClima(cidade: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${cidade}`);
  }
}