import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/sevices/order.service';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.css']
})
export class DisplayOrderComponent implements OnInit {
id:any;
T:any=[];
  constructor(private orderService:OrderService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
     this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.orderService.getOrderById(this.id).subscribe((response)=>{
      console.log("here display ordder",response.comande);
      
     this.T = response.comande;
    })
  }

}
