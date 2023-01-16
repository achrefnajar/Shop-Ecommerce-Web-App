import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/sevices/order.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
T:any=[];
id:any;
  constructor(private orderService:OrderService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() { 
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    this.orderService.getAllOder().subscribe((response)=>{
      console.log("here response of all order ", response.comandes);
      this.T = response.comandes;
    })
  }

  gotoDisplay(id) {
    this.router.navigate([`displayOrder/${id}`])
  }

  delete(id){
    this.orderService.deleteOrderById(id).subscribe((response)=> {
      console.log('here delete res',response.message)
    });
    this.orderService.getAllOder().subscribe((response)=> {
      this.T= response.comandes;
    });
  }

}
