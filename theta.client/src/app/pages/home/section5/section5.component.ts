import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-section5',
  standalone: true,
  templateUrl: './section5.component.html',
  styleUrl: './section5.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Section5Component {
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
}
