import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Model/product';
import { ProductComponent } from '../Components/product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL="http://localhost:3000/api/productos"
  API2_URL="http://localhost:3000/api/productos/"
  products: Producto[] | undefined;
  cart_items: Producto[] = [];
  page: Producto[] = [];
  constructor(private http:HttpClient) {
    this.cart_items=[]
    this.page=[]
   }

  getProducts(){
    return this.http.get<Producto[]>(this.API_URL);
  }

  getProduct(){
    return this.cart_items = JSON.parse(localStorage.getItem('page') || '{}')
  }

  getCart(){
    return this.cart_items = JSON.parse(localStorage.getItem('cart') || '{}')
  }

  addToCart(item:Producto){
    item.qty_c = 1;

    if(localStorage.getItem('cart') === null){
      this.cart_items?.push(item);
      localStorage.setItem('cart', JSON.stringify(this.cart_items))
    }
    else if(this.isDuplicated(item.id)){
      this.cart_items = JSON.parse(localStorage.getItem('cart') || '{}')
      this.cart_items[this.isDuplicatedId(item.id)].qty_c++;
      localStorage.setItem('cart', JSON.stringify(this.cart_items))
    }
    else{
      this.cart_items?.push(item);
      localStorage.setItem('cart', JSON.stringify(this.cart_items))
    }

    console.log(this.cart_items);
  }

  isDuplicated(id:any){
    for(var i=0; i <= this.cart_items.length -1; i++)
    {
        if(id === this.cart_items[i].id){
          return true;
        }
    }
    return false;
  }

  isDuplicatedId(id:any){
    for(var i=0; i <= this.cart_items.length -1; i++){
      if(id === this.cart_items[i].id){
        return i;
      }
    }
    return 0;
  }

  showPage(item:Producto){
    this.getProduct()
    console.log(item)
    this.page.push(item);
    localStorage.setItem('page', JSON.stringify(this.page))
  }

}
