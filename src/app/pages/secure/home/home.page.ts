import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('swiper') swiper_categories: SwiperComponent;
  @ViewChild('swiper') swiper_trails: SwiperComponent;

  categories = [
    {
      name: 'Hiking Trails',
      icon: '🦶'
    },
    {
      name: 'Biking Trails',
      icon: '🚴'
    },
    {
      name: 'Water Trails',
      icon: '🚣'
    },
    {
      name: 'Urban Trails',
      icon: '🌇'
    },
    {
      name: 'Ski Trails',
      icon: '⛷️'
    }
  ];

  // Swiper config
  swiper_categories_config: SwiperOptions = {
    slidesPerView: 3.4,
    spaceBetween: 16
  };
  swiper_categories_trails: SwiperOptions = {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: { clickable: false },
    allowTouchMove: true
  };

  constructor() { }

  ngOnInit() {
  }

}
