import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/sevices/order.service';

@Component({
  selector: 'app-annonce-user-table',
  templateUrl: './annonce-user-table.component.html',
  styleUrls: ['./annonce-user-table.component.css']
})
export class AnnonceUserTableComponent implements OnInit {
id:any;
T:any=[];
  constructor(private OrderService:OrderService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
this.id = this.activatedRoute.snapshot.paramMap.get('id');
this.OrderService.getUserOder(this.id).subscribe((response)=>{
 console.log("here oders users ", response.myorder);
 this.T = response.myorder;
})
 }

}
