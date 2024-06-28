import { FooterComponent } from './../footer/footer.component';
import { NavebarComponent } from './../navebar/navebar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavebarComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
