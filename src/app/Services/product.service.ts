import { productsList } from './../Models/productsList';
import { IProducts } from './../Models/Iproducts';
import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   products: IProducts[] = [];
//   constructor() {
//     this.products = productsList;
//   }

//   getAllProducts(): IProducts[] {
//     return this.products;
//   }

//   getProductById(productId: number): IProducts | undefined {
//     return this.products.find((product) => product.id == productId);
//   }

//   addNewProduct(product: IProducts) {
//     this.products.push(product);

//     return this.products;
//   }

//   deleteProduct(productId: number) {
//     this.products = this.products.filter((product) => product.id != productId);
//     return this.products;
//   }
//   editProduct(productId: number, product: IProducts) {
//     const index = this.products.findIndex((p) => p.id === productId);
//     if (index !== -1) {
//       this.products[index] = product;
//     }
//     return this.products;
//   }
// }


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProducts[] = [];
  
  constructor() {
    this.products = productsList;
  }

  getAllProducts(): IProducts[] {
    return this.products;
  }

  getProductById(productId: number): IProducts | undefined {
    return this.products.find((product) => product.id == productId);
  }

  addNewProduct(product: IProducts) {
    this.products.push(product);
    return this.products;
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter((product) => product.id != productId);
    return this.products;
  }

  editProduct(productId: number, product: IProducts) {
    this.products=this.products.map((prop)=>{
      if(prop.id==productId){
        return product;
      }
      return prop;
    });
  
    return this.products;
  }
}

