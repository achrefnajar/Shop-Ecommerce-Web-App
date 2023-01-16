import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderURl: string = "http://localhost:3000/orders"

  constructor(private httpClient:HttpClient) { }
  addOrder(obj) {
    return this.httpClient.post<{ message: string, annonce:any }>(this.orderURl, obj);
  }
  getOrderByUser(id){
    return this.httpClient.get<{order:any}>(`${this.orderURl}/${id}`);
  }
  deleteOrderById(id){
    return this.httpClient.delete<{ message:string}>(`${this.orderURl}/${id}`);
  }
  getAllOder(){
    return this.httpClient.get<{comandes:any}>(this.orderURl);
   }
   getUserOder(id) {
    return this.httpClient.get<{myorder:any}>(`${this.orderURl}/api/${id}`)
   }
   getOrderById(id) {
     return this.httpClient.get<{comande:any}>(`${this.orderURl}/user/${id}`);
   }
}
