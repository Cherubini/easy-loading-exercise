import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SharedModule, FirstComponent, SecondComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

}
