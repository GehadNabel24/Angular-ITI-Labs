import { RouterLink } from '@angular/router';
import { ProductService } from './../../Services/product.service';
import { IProducts } from './../../Models/Iproducts';
import { FooterComponent } from './../footer/footer.component';
import { NavebarComponent } from './../navebar/navebar.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,NavebarComponent,FooterComponent,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit   {

  products: IProducts[];
  constructor(public ProductService: ProductService) {
    this.products = [];
  }
  ngOnInit(): void {
    this.products = this.ProductService.getAllProducts();
  }

  deleteHandler(productId: number) {
    this.products = this.ProductService.deleteProduct(productId);
  }

}
