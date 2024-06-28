import { FooterComponent } from './../footer/footer.component';
import { NavebarComponent } from './../navebar/navebar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NavebarComponent,FooterComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

}
