import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/app/sevices/annonce.service';

@Component({
  selector: 'app-annonce-client-table',
  templateUrl: './annonce-client-table.component.html',
  styleUrls: ['./annonce-client-table.component.css']
})
export class AnnonceClientTableComponent implements OnInit {
  myAnnonce:any=[];
  V:any=[];
    userId: any;
  id:any;
    constructor(private annonceService:AnnonceService,private activatedRoute:ActivatedRoute, private router:Router) { }
  
    ngOnInit() {
       this.id = this.activatedRoute.snapshot.paramMap.get('id');
      
       this.annonceService.getAnnonceByUser(this.id).subscribe((response)=> {
           this.V = response.annonces;
            });
      // this.userId = localStorage.getItem("userId");
      // this.annonceService.getAllAnnonce().subscribe((response)=> {
      //   this.V = response.annonces;
      //      for (var i = 0; i < this.V.length; i++) {
      //        if (this.V[i].userId == this.userId) {
      //         this.myAnnonce.push(this.V[i]);
      //        console.log("here my annonce",this.myAnnonce);
      //        }
      //    }
      // });
    //   this.myAnnonce= this.V.filter(function(el){
    //     return el.userId == userId;
    // });
    // console.log(this.myAnnonce);
     }
     gotoDisplay(id){
      this.router.navigate([`displayAnnonce/${id}`]);
     }
     gotoEdit(id){
      this.router.navigate([`editAnnonce/${id}`])
  
    }
  
     delete(id){
      this.annonceService.deleteAnnonce(id).subscribe((response)=> {
        console.log('here delete res',response.message)
      });
      this.annonceService.getAnnonceByUser(this.id).subscribe((response)=> {
        this.V = response.annonces;
      });
    }
  
     
  }