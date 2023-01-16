import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  clientIsAuthenticated:any;
  UserIsAuthenticated:any;
  adminIsAuthenticated:any;
 private authListenerSubs: Subscription;
 private authClient: Subscription;
 private authUser: Subscription;
 private authAdmin: Subscription;
 profile: any;
 username: string;
 profileisSet = false;
 role:any;
 T:any=[];
 userId:any;
 user:any={};

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute,private router:Router) { }
  

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.T=response.users;
      });
     for (let i = 0; i < this.T.length; i++) {
      if (this.T[i].id==this.userId) {
        this.user=this.T[i];
        
      }
      
     }

    this.userIsAuthenticated = this.userService.getIsAuth();
 console.log('here auth', this.userIsAuthenticated);
 this.authListenerSubs = this.userService
 .getAuthStatusListener()
 .subscribe(isAuthenticated => {
 this.userIsAuthenticated = isAuthenticated;
 });
 this.clientIsAuthenticated = this.userService.getIsAuthClient();
 console.log('here auth Client', this.clientIsAuthenticated);
 this.authClient = this.userService .getAuthClient().subscribe(isClient => {
     this.clientIsAuthenticated = isClient;
   });
 this.UserIsAuthenticated = this.userService.getIsAuthUser();
 console.log('here auth User', this.UserIsAuthenticated );
 this.authUser = this.userService .getAuthUser().subscribe(isUser => {
     this.UserIsAuthenticated  = isUser;
   });
 this.adminIsAuthenticated = this.userService.getIsAuthAdmin();
 console.log('here auth Admin', this.adminIsAuthenticated);
 this.authAdmin = this.userService .getAuthAdmin().subscribe(isAdmin => {
     this.adminIsAuthenticated = isAdmin;
   });

  }

  onLogout() {
    this.userService.logout();
    }
   

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
    this.authClient.unsubscribe();
    this.authUser.unsubscribe();
    this.authAdmin.unsubscribe();
    this.role=localStorage.getItem("userRole")
  }
  // header obj
  userObj(){
     let id= localStorage.getItem("userId");
    
 this.router.navigate([`dashboardClient/${id}`]);
  }
  goToUserOrder(){
    let id= localStorage.getItem("userId");
    
this.router.navigate([`dashboardUser/${id}`]);
 }


}
