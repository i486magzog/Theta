import { Injectable } from '@angular/core';

@Injectable()
export class ParallaxScrollService {
  private parallaxElements: HTMLElement[] = [];
  private sectionElement: HTMLElement | null = null;
  private parallaxDefaultSpeed = 0.03;
  private scrollHandler: (() => void) | null = null;

  constructor() {}

  initParallax(sectionSelector: string | HTMLElement, elementSelectors: string[]) {
    // 섹션 요소 선택
    this.sectionElement = sectionSelector instanceof HTMLElement ? sectionSelector : document.querySelector(sectionSelector);

    // 패럴랙스 효과를 적용할 요소들 선택
    const parallaxElements = elementSelectors
      .map(selector => this.sectionElement?.querySelector(selector) as HTMLElement)
      .filter(el => el !== null);

    this.parallaxElements = [
      ...parallaxElements,
      ...(this.sectionElement?.querySelectorAll('[parallax]') as NodeListOf<HTMLElement>)
    ];

    // 각 요소에 속도 속성 추가
    this.parallaxElements.forEach(element => {
      if (!element.hasAttribute('data-speed')) {
        element.setAttribute('data-speed', this.parallaxDefaultSpeed.toString()); // 기본 속도 설정
      }
    });

    // 스크롤 이벤트 핸들러 등록
    this.scrollHandler = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.scrollHandler);

    this.scrollHandler();
  }

  private parseTransformY(transform: string): number {
    const match = /translateY\((-?\d+(\.\d+)?)px\)/.exec(transform);
    return match ? parseFloat(match[1]) : 0;
  }

  private handleScroll() {
    if (!this.sectionElement) return;

    const sectionRect = this.sectionElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const isVisible = (sectionRect.top < windowHeight && sectionRect.top > 0)
      || ( sectionRect.bottom > 0 && sectionRect.bottom < windowHeight);

    if (isVisible){
      const scrollProgress = 1 - (((sectionRect.top + sectionRect.bottom)/ 2) / windowHeight);
      this.parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.03');
        const yPos = -(scrollProgress * windowHeight * speed);
        const currentTransform = element.style.transform;
        const currentY = this.parseTransformY(currentTransform);

        if (Math.abs(currentY - yPos) > 2) {
          element.style.transform = `translateY(${yPos}px)`;
        }
      });
    }
  }

  destroy() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
      this.scrollHandler = null;
    }
    this.parallaxElements = [];
    this.sectionElement = null;
  }
}
