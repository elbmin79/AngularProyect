import { Component, Input ,OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-card-cart',
  templateUrl: './card-cart.component.html',
  styleUrls: ['./card-cart.component.css']
})
export class CardCartComponent implements OnInit {
  @Input() product: any;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
  }

}
