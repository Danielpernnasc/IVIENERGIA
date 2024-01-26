import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})

export class ConsumoApiService {


  private consumoAPI = 'https://app-preproject-dev.azurewebsites.net';


  constructor(private httpClient: HttpClient) { }

  getDeveloper(): Observable<any[]>{
      return this.httpClient.get<any[]>(`${this.consumoAPI}/developers`).pipe(
        map(data => data.map(i => i.name)),
        filter(info => !! info)
        
      );
  }
  
   getState(): Observable<any[]> {
      return this.httpClient.get<any[]>(`${this.consumoAPI}/states`).pipe(
        map(data => data.map(item => item.name)),
        filter(info => !!info)
      );
   }
  
  getCities(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.consumoAPI}/cities`).pipe(
      map(data => data.map(i => i.name)),
      filter(info => !!info)
    )
  }

  getUtility(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.consumoAPI}/utilitys`).pipe(
      map(data => data.map(i => i.name)),
      filter(info => !!info)
    )
  }
}
