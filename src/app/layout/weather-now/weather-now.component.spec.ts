import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNowComponent } from './weather-now.component';

describe('WeatherNowComponent', () => {
  let component: WeatherNowComponent;
  let fixture: ComponentFixture<WeatherNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherNowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
