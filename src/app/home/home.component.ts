import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; //import and inject ApiService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any; // originally products = any[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.sendGetRequest().subscribe((data: any)=>{ // originally: data: any[]
      console.log(data);
      this.products = data;
    })
  }
}
