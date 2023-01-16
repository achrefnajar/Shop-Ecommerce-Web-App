import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/sevices/annonce.service';
import { AnnonceComponent } from '../annonce/annonce.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  T: any=[];

  constructor(private annonceService:AnnonceService) { }

  ngOnInit() {
    this.annonceService.getAllAnnonce().subscribe((response)=> {
      this.T = response.annonces;
    })
  }

}
