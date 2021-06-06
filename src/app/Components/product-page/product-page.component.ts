import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/Model/product';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  page: any;
  @Input() product:any;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    //console.log(this.productService.getProducts());
    this.getProduct();
  }

  getProduct(){
    this.productService.getProduct();
  }



}
