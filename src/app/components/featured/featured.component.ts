import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/sevices/annonce.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
T:any=[];
  constructor(private annonceService:AnnonceService) { }

  ngOnInit() {
    this.annonceService.getAllAnnonce().subscribe((response)=> {
      this.T = response.annonces;
    });
  }

}
