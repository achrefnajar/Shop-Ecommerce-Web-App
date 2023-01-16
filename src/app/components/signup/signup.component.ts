import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  path:string;
  imagePreview:any;
  msgError:any;


  constructor(private formBuilder:FormBuilder, private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.path = this.router.url;
    if (this.path == "/registerAdmin") {
    this.signupForm=this.formBuilder.group ({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.email, Validators.required, Validators.pattern("[a-z0-9._%+-]+@[admin]+\.[com]{3,4}$")]],
      Tel: ['',[Validators.required,Validators.pattern( "^((\\+216-?)|0)?[0-9]{8}$")]],
      pwd: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(4)]],
      confirmPwd: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(4),Validators.pattern]],
      img:['']
  });
} else{
  this.signupForm=this.formBuilder.group ({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['',[Validators.required,Validators.minLength(3)]],
    email: ['', [Validators.email,Validators.required] ],
    Tel: ['',[Validators.required,Validators.pattern( "^((\\+216-?)|0)?[0-9]{8}$")]],
    pwd: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(4)]],
    confirmPwd: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(4),Validators.pattern]],
    img:['']
});

}
  }
  //Validators.pattern("^[a-z0-9._%+-]+@[admin]+\.[com]{3,4}$")] ],


  signup(){
   if (this.path == "/register") {
    this.signupForm.value.role ="User"
    this.signupForm.value.statu ="true"
   } else if (this.path == "/registerClient"){
    this.signupForm.value.role ="Client"
    this.signupForm.value.statu ="false"
   }
   else{
     this.signupForm.value.role = "Admin"
     this.signupForm.value.statu = "true"
   }
   this.userService.singnUp(this.signupForm.value, this.signupForm.value.img).subscribe((response)=>{
    console.log("here into user",response.message);
    if (response.message == "Email Exist") {
      this.msgError = response.message
     } else{
       this.router.navigate(['login']);
     }
   });
  }
  
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
