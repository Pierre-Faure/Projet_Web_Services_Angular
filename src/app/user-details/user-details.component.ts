import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails:any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = Number(routeParams.get('userId'));
    const url ='./assets/users.json'
    this.http.get<any>(url).subscribe(res=>{
      this.userDetails = res.find((user: { id: number; }) => user.id === userIdFromRoute);
      console.log(this.userDetails)
    })
  }

}
