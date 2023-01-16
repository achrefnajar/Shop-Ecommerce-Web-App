import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/app/sevices/annonce.service';

@Component({
  selector: 'app-annonce-table',
  templateUrl: './annonce-table.component.html',
  styleUrls: ['./annonce-table.component.css']
})
export class AnnonceTableComponent implements OnInit {
 V:any=[];
 

  constructor(private annonceService:AnnonceService, private router:Router) { }

  ngOnInit() {
   
    this.annonceService.getAllAnnonce().subscribe((response)=> {
      this.V = response.annonces;
    })
  }
  delete(id){
    this.annonceService.deleteAnnonce(id).subscribe((response)=> {
      console.log('here delete res',response.message)
    });
    this.annonceService.getAllAnnonce().subscribe((response)=> {
      this.V = response.annonces;
    });
  }
  gotoDisplay(id){
   this.router.navigate([`displayAnnonce/${id}`]);
  }

}
