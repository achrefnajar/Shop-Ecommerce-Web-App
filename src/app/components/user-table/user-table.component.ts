import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/sevices/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  T: any = [];
  pageOfItems: Array<any>;
  
  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.T = response.users;
      })
  }

  gotoDisplay(id) {
   
    this.router.navigate([`displayUser/${id}`])
  }
  DeleteUser(id) {

    this.userService.deleteUserById(id).subscribe((response) => {
      console.log("here response after delete", response.message);
    });
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.T = response.users;
      });
  }
  goToEdit(id) {
    this.router.navigate([`editUser/${id}`])

  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
  }

}
