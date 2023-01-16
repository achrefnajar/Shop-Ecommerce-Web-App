import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  signupForm:FormGroup;
  user:any={};
  id:any;
  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.signupForm=this.formBuilder.group ({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.email,Validators.required] ],
      pwd: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(4)]],
      confirmPwd: ['',[Validators.required,Validators.maxLength(12),Validators.minLength(4),Validators.pattern]],
      img:[''],
      statu:['']
  });
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
  this.userService.getUserById(this.id).subscribe((response)=> {
    this.user = response.user;
    console.log("her user",this.user)
  })
  }
  changeStatu(){
    this.userService.editUserById(this.user).subscribe((response)=>{
      console.log("here edit with success",response.message);
      
    })

    this.router.navigate(['dashbord']);
  }

}
