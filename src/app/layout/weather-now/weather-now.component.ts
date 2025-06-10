import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-now',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './weather-now.component.html',
  styleUrl: './weather-now.component.scss'
})
export class WeatherNowComponent {
    currentDate = new Date()


}
