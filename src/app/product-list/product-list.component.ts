import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  productData:any = [];

  constructor(private http: HttpClient) { }

  getProductData(){
    const url ='./assets/products.json'
    this.http.get(url).subscribe((res)=>{
      this.productData = res
      console.log(this.productData)
    })
  }

  ngOnInit(): void {
    this.getProductData()
  }

}
