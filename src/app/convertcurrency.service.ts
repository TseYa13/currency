import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConvertcurrencyService {

  constructor(private http: HttpClient){}

  getData()
  {
    let url = 'https://api.exchangerate.host/latest?base=';
    return this.http.get(url);
    
  }
}
