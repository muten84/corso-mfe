import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient) { }

  public fetchRestaurants() {
    const url = 'https://api.pasto.app/api/v2/utils/724/partners.json';
    return this.httpClient.get(url);
  } 
}
