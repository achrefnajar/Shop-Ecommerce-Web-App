import { Component, OnInit, TrackByFunction } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/app/sevices/annonce.service';
import { OrderService } from 'src/app/sevices/order.service';

@Component({
  selector: 'app-display-annonce',
  template: `
  <button
    class="btn btn-outline-secondary"
    mwlConfirmationPopover
    [popoverTitle]="popoverTitle"
    [popoverMessage]="popoverMessage"
    (confirm)="confirmClicked = true"
    (cancel)="cancelClicked = true"
  >
    Click me!
  </button>
`
,
  templateUrl: './display-annonce.component.html',
  styleUrls: ['./display-annonce.component.css']
})

export class DisplayAnnonceComponent implements OnInit {
 id:any;
 msg:any;
 qty:any;
 annonce:any={};
 orderForm:FormGroup;
  userId: any;
  placements = ['confirmation'];
  popoverTitle = 'Are you sure?';
  popoverMessage = 'Are you really <b>sure</b> you want to do this?';
  confirmText = 'Yes ';
  cancelText = 'No ';
  confirmClicked = false;
  cancelClicked = false;
  trackByValue: TrackByFunction<string> = (index, value) => value;
  constructor(private annonceService:AnnonceService, private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder,
    private orderService:OrderService,private router:Router) { }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    console.log("here user id",this.userId); 
    this.orderForm=this.formBuilder.group ({
      qty: ['', [Validators.required,Validators.min(1)]],    
  });
     this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.annonceService.getAnnonceById(this.id).subscribe((response)=>{
        this.annonce = response.annonce;
        console.log("here annonce", this.annonce)
    });
  }
  AddCommande(){
    this.orderForm.value.userId= this.userId;
    this.orderForm.value.annonceId= this.id;
    this.orderForm.value.clientId= this.annonce.userId;
    console.log("here order", this.orderForm.value)
    this.orderService.addOrder(this.orderForm.value).subscribe((response)=>{
      console.log("here response after order",response.message);
     
      if (response.message == "quantité insuffisante") {
        this.msg = response.message ;
        this.qty = `il reste ${response.annonce.qty} article`
      }else {
        this.router.navigate(['']);
      }
    });
  

  }
}
