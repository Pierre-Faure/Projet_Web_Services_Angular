import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetails:any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const url ='./assets/products.json'
    this.http.get<any>(url).subscribe(res=>{
      this.productDetails = res.find((product: { id: number; }) => product.id === productIdFromRoute);
      console.log(this.productDetails)
    })
  }

}
