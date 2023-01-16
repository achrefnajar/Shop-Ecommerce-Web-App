import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  url = `${environment.apiUrl}/annonces`;
//  annonceURL: string = "http://localhost:3000/annonces"

  constructor(private httpClient:HttpClient) { }
  addAnnonce(prod: any, img: File) {
    let formData = new FormData();
    formData.append("img", img)
    formData.append("description", prod.description);
    formData.append("price", prod.price);
    formData.append("qty", prod.qty);
    formData.append("category", prod.category);
    formData.append("date", prod.date);
    formData.append("userId", prod.userId);

    return this.httpClient.post<{ message: string }>(this.url, formData);
  }
  getAllAnnonce(){
    return this.httpClient.get<{ annonces:any }>(this.url);
  }
  deleteAnnonce(id){
    return this.httpClient.delete<{ message:string}>(`${this.url}/${id}`);
  }
  getAnnonceByUser(id){
    return this.httpClient.get<{annonces:any}>(`${this.url}/${id}`);
  }
  getAnnonceById(id){
    return this.httpClient.get<{ annonce:any}>(`${this.url}/api/${id}`);
  }
  editAnnonceById(obj) {
    return this.httpClient.put<{message:string}>(`${this.url}/${obj._id}`, obj);
  }
}
