import { Component, ContentChild, CUSTOM_ELEMENTS_SCHEMA, effect, ElementRef, input, Input, QueryList, viewChild, ViewChildren } from '@angular/core';
//import { SwiperContainer } from 'swiper/element/bundle';
import { Swiper } from 'swiper';

// You can tweek this interface as you want
interface Slide {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  linkUrl?: string;
  order?: number;
  active?: boolean;
  customClass?: string;
  content?: {
    html?: string;
    text?: string;
  };
  metadata?: {
    [key: string]: any;
  };
}

@Component({
  selector: 'app-section8',
  standalone: true,
  templateUrl: './section8.component.html',
  styleUrl: './section8.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Section8Component {
  index = 0;

  @ViewChildren('swiper')
  swiperRefs!: QueryList<ElementRef>;
  swiper!: Swiper;

  goNext() {
    const swiper = this.swiperRefs.toArray()[this.index].nativeElement.swiper;
    swiper.slideNext();
  }

  goPrev() {
    const swiper = this.swiperRefs.toArray()[this.index].nativeElement.swiper;
    swiper.slidePrev();
  }
}
