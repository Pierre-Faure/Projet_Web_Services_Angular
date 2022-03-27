import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderData:any = [];

  constructor(private http: HttpClient) { }

  getOrderData(){
    const url ='./assets/orders.json'
    this.http.get(url).subscribe((res)=>{
      this.orderData = res
      console.log(this.orderData)
    })
  }

  ngOnInit(): void {
    this.getOrderData()
  }

}
