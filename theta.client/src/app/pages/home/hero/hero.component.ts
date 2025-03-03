import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent implements AfterViewInit {
  index = 0;

  @ViewChildren('swiper')
  swiperRefs!: QueryList<ElementRef>;
  swiper!: Swiper;

  goNext() {
    const slides = this.swiperRefs.toArray();
    const swiper = slides[this.index].nativeElement.swiper;
    swiper.slideNext();
  }

  goPrev() {
    const slides = this.swiperRefs.toArray();
    const swiper = slides[this.index].nativeElement.swiper;
    swiper.slidePrev();
  }

  ngAfterViewInit() {
    //const video: HTMLVideoElement|null = document.querySelector('.bg-video video');
    //if (video) {
    //  video.play().catch(error => {
    //    console.error('Error attempting to play video:', error);
    //  });
    //}
  }
}
