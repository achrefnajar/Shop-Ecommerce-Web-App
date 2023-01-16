import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user :any={};
  loginForm:FormGroup;
  errormsg:any;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  // login(){
  //   this.userService.login(this.user).subscribe((response) => {
  //     console.log("here response after login", response.message);
  //     console.log("here response after login", response.user);
  //     if (response.message == "2") {
  //       if (response.user.role == "Client") {
  //         this.router.navigate(['shop']);
  //       } else {
  //         this.router.navigate(['']);
  //       }
  //     } else {
  //       this.errormsg = "Please chek email or pwd"
  //     }
  //   })
  // }
  validateLogin() {
    this.userService.login(this.user.email, this.user.pwd);
    }
   
  

}
