import { CategoryComponent } from './../category/category.component';
import { AboutComponent } from './../about/about.component';
import { FooterComponent } from './../footer/footer.component';
import { SliderComponent } from './../slider/slider.component';
import { NavebarComponent } from './../navebar/navebar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavebarComponent,SliderComponent,FooterComponent,AboutComponent,CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
