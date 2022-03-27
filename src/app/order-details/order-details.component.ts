import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails:any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const orderIdFromRoute = Number(routeParams.get('orderId'));
    const url ='./assets/orders.json'
    this.http.get<any>(url).subscribe(res=>{
      this.orderDetails = res.find((order: { id: number; }) => order.id === orderIdFromRoute);
      console.log(this.orderDetails)
    })
  }

}
