import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/sevices/annonce.service';
import { UserService } from 'src/app/sevices/user.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  [x: string]: any;
  
  productForm: FormGroup;
  imagePreview:any;
  userID:any;
  fullDate:any;
 
  constructor( private formBuilder : FormBuilder, private annonceService:AnnonceService,
    private router:Router) { }

  ngOnInit() {
    this.actualDate = new Date() 
    this.userId = localStorage.getItem("userId");
    console.log("here user id",this.userId); 
    this.productForm=this.formBuilder.group ({
      description: ['', [Validators.required]],
      price: ['',[Validators.required,Validators.min(1)]],
      qty: ['', [Validators.email,Validators.min(1)] ],
      category:[''],
      img:[''],   
  });
 
 
  }
  
 
  addProduct(){
    var d = new Date();
var date = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();
var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
 this.fullDate = date +' '+ hours;
console.log(this.fullDate);
    this.productForm.value.userId= this.userId;
    console.log("here product",this.productForm.value);
    this.productForm.value.date= this.fullDate;
    console.log("here date",this.productForm.value.date)
this.annonceService.addAnnonce(this.productForm.value, this.productForm.value.img).subscribe((response)=>{
  console.log("here response after add annonce",response.message);
  if (response.message == 'not access') {
   alert(response.message);
  }else{this.router.navigate(['']);}
  
});

  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.productForm.patchValue({ img: file });
    this.productForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
    
}
