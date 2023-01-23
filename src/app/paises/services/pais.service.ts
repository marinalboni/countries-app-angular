import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryInfo } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<CountryInfo[]> {
    const url = `${ this.apiUrl }name/${ termino }`;
    return this.http.get<CountryInfo[]>(url);
  }

  buscarPorCapital( termino: string ): Observable<CountryInfo[]> {
    const url = `${ this.apiUrl }capital/${ termino }`;
    return this.http.get<CountryInfo[]>(url);
  }

  buscarPorCodigo( codigo: string ): Observable<CountryInfo[]> {
    const url = `${ this.apiUrl }alpha/${ codigo }`;
    return this.http.get<CountryInfo[]>(url);
  }

}
