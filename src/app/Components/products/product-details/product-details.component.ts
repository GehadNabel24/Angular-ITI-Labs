import { CommonModule } from '@angular/common';
import { IProducts } from './../../../Models/Iproducts';
import { ProductService } from './../../../Services/product.service';
import { FooterComponent } from './../../footer/footer.component';
import { NavebarComponent } from './../../navebar/navebar.component';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavebarComponent,FooterComponent,CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  productId: any;
  product?: IProducts;
  constructor(
    public activatedRoute: ActivatedRoute,
    public productServices: ProductService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.product = this.productServices.getProductById(this.productId);
    console.log(this.product);
  }

  backToProducts() {
    this.router.navigate(['/products']);
  }

}
