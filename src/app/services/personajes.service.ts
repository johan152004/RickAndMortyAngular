import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getPersonajes(name: string = '', status: string = ''): Observable<any> {
    let url = this.apiUrl;
    const params: string[] = [];
    
    if (name) params.push(`name=${name}`);
    if (status) params.push(`status=${status}`);
    
    if (params.length) {
      url += '?' + params.join('&');
    }
    
    return this.http.get(url);
  }

  getPersonajeById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}