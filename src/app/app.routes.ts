import { CategoryComponent } from './Components/category/category.component';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductFormComponent } from './Components/products/product-form/product-form.component';
import { ProductDetailsComponent } from './Components/products/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { HomeComponent } from './Components/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: 'products/:id/edit', component: ProductFormComponent },
    { path: 'about', component: AboutComponent },
    { path: 'category', component: CategoryComponent },

    { path: '**', component: NotFoundComponent },
];
