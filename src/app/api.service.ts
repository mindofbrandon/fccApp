import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000"
  constructor(private httpClient: HttpClient) { }

  public get() { // get method to send request to api endpoint
    return this.httpClient.get(this.SERVER_URL);
  }
  
}
