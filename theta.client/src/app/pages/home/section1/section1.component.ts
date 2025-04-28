import { Component, ElementRef, QueryList, ViewChildren, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { Swiper } from 'swiper/types';
import { ParallaxScrollService } from '../../../services/parallax.scroll.service';

@Component({
  selector: 'app-section1',
  standalone: true,
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ParallaxScrollService]
})
export class Section1Component implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('swiper')
  swiperRefs!: QueryList<ElementRef>;
  swiper!: Swiper;

  @ViewChildren('swiper2')
  swiper2Refs!: QueryList<ElementRef>;
  swiper2!: Swiper;

  constructor(
    private parallaxService: ParallaxScrollService,
    private elRef: ElementRef
  ) {}

  ngAfterViewInit() {
    this.swiperRefs.changes.subscribe(() => { this.initializeSwiper(); });
    this.initializeSwiper();

    this.swiper2Refs.changes.subscribe(() => { this.initializeSwiper2(); });
    this.initializeSwiper2();

    const parentElement = this.elRef.nativeElement; // 👈 이게 현재 컴포넌트의 최상위 element
    this.parallaxService.initParallax(parentElement, []);
  }

  initializeSwiper() {
    this.swiperRefs.forEach((swiperRef) => {
      this.swiper = swiperRef.nativeElement.swiper;
      this.swiper.on('slideChange', () => this.onSlideChange(this.swiper));
    });
  }

  initializeSwiper2() {
    this.swiper2Refs.forEach((swiper2Ref) => {
      this.swiper2 = swiper2Ref.nativeElement.swiper;
    });
  }

  slideToIndexSwiper2(index: number) {
    if (this.swiper2) {
      this.swiper2.slideTo(index);
    } else {
      console.error('Swiper2 is not initialized');
    }
  }

  onSlideChange(swiperInstance: Swiper) {
    console.log('현재 슬라이드 인덱스:', swiperInstance.activeIndex);
    this.slideToIndexSwiper2(swiperInstance.activeIndex);
    // loop: true 사용 시는 realIndex 도 확인 가능
    // console.log('실제 데이터 인덱스:', swiperInstance.realIndex);
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.parallaxService.destroy();
  }
}
