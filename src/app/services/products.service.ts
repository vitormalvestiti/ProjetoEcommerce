import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsByCategory(): Observable<any>{
    return this.http.get(`${API_URL}/products/category/electronics`);
  }


}
