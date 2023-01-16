import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/sevices/order.service';

@Component({
  selector: 'app-order-client',
  templateUrl: './order-client.component.html',
  styleUrls: ['./order-client.component.css']
})
export class OrderClientComponent implements OnInit {
T:any=[];
id:any;
  constructor(private orderService:OrderService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.orderService.getOrderByUser(this.id).subscribe((response)=> {
      this.T=response.order;
      console.log("here order",this.T);
    })
   
  }
  delete(id){
    this.orderService.deleteOrderById(id).subscribe((response)=> {
      console.log('here delete res',response.message)
    });
    this.orderService.getOrderByUser(this.id).subscribe((response)=> {
      this.T= response.order;
    });
  }

}
