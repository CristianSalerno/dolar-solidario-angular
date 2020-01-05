import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DolarService {

  constructor(private http: HttpClient) {

  }

  getDolar() {
    return this.http.get('http://localhost:4000/api/dolar').toPromise()
  }


}
