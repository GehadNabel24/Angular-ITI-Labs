import { productsList } from './../../../Models/productsList';
import { IProducts } from './../../../Models/Iproducts';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../Services/product.service';
import { FooterComponent } from './../../footer/footer.component';
import { NavebarComponent } from './../../navebar/navebar.component';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, NavebarComponent, FooterComponent],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  image: string = '';
  name: string = '';
  price: number = 0;
  quantity: number = 0;
  productId: any;
  product: any;

  constructor(
    public ProductServices: ProductService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId != 0) {
      this.product = this.ProductServices.getProductById(this.productId);
      this.image = this.product.image;
      this.name = this.product.name;
      this.price = this.product.price;
      this.quantity = this.product.quantity;
    }
  }

  productHandler() {
    if (this.productId == 0) {
      let id = productsList.length + 1;
      let newProduct: IProducts = {
        id,
        image: this.image,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
      };
      this.ProductServices.addNewProduct(newProduct);
      this.router.navigate(['/products']);
    } else {
      let editedProduct: IProducts = {
        id: this.productId,
        image: this.image,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
      };
      this.ProductServices.editProduct(this.productId, editedProduct); // Passing editedProduct here
      this.router.navigate(['/products']);
    }
  }
}
