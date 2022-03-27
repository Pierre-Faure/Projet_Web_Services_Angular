import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userData:any = [];

  constructor(private http: HttpClient) { }

  getUserData(){
    const url ='./assets/users.json'
    this.http.get(url).subscribe((res)=>{
      this.userData = res
      console.log(this.userData)
    })
  }

  ngOnInit(): void {
    this.getUserData()
  }
}
