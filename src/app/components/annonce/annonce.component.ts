import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  getAllAnnonce() {
    throw new Error('Method not implemented.');
  }
  @Input() annonce: any
  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoDisplay(id) {
    this.router.navigate([`displayAnnonce/${id}`]);
  }
  color(n: number) {
    if (n >= 0 && n <= 50) {

      return '1'
    }
    else if (n >= 50 && n <= 300) {
      return '2'
    }
    else return '3'

  }

}
