import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ViewChildren, QueryList, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Swiper } from 'swiper/types';
import { ParallaxScrollService } from '../../../services/parallax.scroll.service';
import { ParallaxMouseService } from '../../../services/parallax.mouse.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  providers: [
    ParallaxScrollService,
    ParallaxMouseService
  ]
})

export class HeroComponent implements AfterViewInit, OnInit, OnDestroy {
  index = 0;

  @ViewChildren('swiper')
  swiperRefs!: QueryList<ElementRef>;
  swiper!: Swiper;

  constructor(
    private parallaxScrollService: ParallaxScrollService,
    private elRef: ElementRef,
    private parallaxMouseService: ParallaxMouseService
  ) {}

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

  ngOnInit() {}

  ngAfterViewInit() {
    const parentElement = this.elRef.nativeElement;
    this.parallaxScrollService.initParallax(parentElement, []);

    const elements = this.elRef.nativeElement.querySelectorAll('[parallax-mouse]') as NodeListOf<HTMLElement>;
    this.parallaxMouseService.initParallax(Array.from(elements));
  }

  ngOnDestroy(): void {
    this.parallaxScrollService.destroy();
    this.parallaxMouseService.destroy();
  }
}
