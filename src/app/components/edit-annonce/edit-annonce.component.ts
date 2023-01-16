import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/app/sevices/annonce.service';

@Component({
  selector: 'app-edit-annonce',
  templateUrl: './edit-annonce.component.html',
  styleUrls: ['./edit-annonce.component.css']
})
export class EditAnnonceComponent implements OnInit {
id:any;
prod:any={};
productForm:FormGroup;
  imagePreview: any;
  constructor(private annonceService:AnnonceService, private activatedRoute:ActivatedRoute,private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.productForm=this.formBuilder.group ({
      description: ['', [Validators.required]],
      price: ['',[Validators.required,Validators.min(1)]],
      qty: ['', [Validators.email,Validators.min(1)] ],
      category:[''],
      img:[''],  
  });
 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.annonceService.getAnnonceById(this.id).subscribe((response)=>{
      this.prod = response.annonce;
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

    editAnnonce(){
      this.annonceService.editAnnonceById(this.prod).subscribe((response)=>{
        console.log("here response after edit",response.message);
        alert(this.id)
        
      })
      this.router.navigate(['']);
    }

}
