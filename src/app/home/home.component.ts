import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/products').subscribe(data => { // <any> typecast is CRUCIAL else home.compononent.html will not be able to access product properties
      console.log('data', JSON.stringify(data))
      this.products = data
    })
  }
}
