import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class ParallaxMouseService implements OnDestroy {
  private elements: Array<{ element: HTMLElement; speedX: number; speedY: number }> = [];
  private mouseMoveHandler: (e: MouseEvent) => void;

  constructor() {
    this.mouseMoveHandler = this.handleMouseMove.bind(this);
  }

  initParallax(elements: HTMLElement[]) {
    // elements 배열 등록
    this.elements = elements.map(el => ({
      element: el,
      speedX: parseFloat(el.getAttribute('data-speed-x') || '0.05'),
      speedY: parseFloat(el.getAttribute('data-speed-y') || '0.05'),
    }));

    window.addEventListener('mousemove', this.mouseMoveHandler);
  }

  private parseTransform(transform: string, xy: string): number {
    const match = new RegExp(`translate${xy.toUpperCase()}\((-?\d+(\.\d+)?)px\)`).exec(transform);
    return match ? parseFloat(match[1]) : 0;
  }

  private handleMouseMove(event: MouseEvent) {
    const { innerWidth, innerHeight } = window;
    const mouseX = event.clientX / innerWidth - 0.5; // -0.5 ~ +0.5
    const mouseY = event.clientY / innerHeight - 0.5;

    this.elements.forEach(({ element, speedX, speedY }) => {
      const translateX = -mouseX * speedX * 100; // 100px 기준 움직임
      const translateY = -mouseY * speedY * 100;

      const currentTransform = element.style.transform;
      const currentY = this.parseTransform(currentTransform, 'Y');
      const currentX = this.parseTransform(currentTransform, 'X');

      const newTransformY = Math.abs(currentY - translateY) > 2 ? translateY : currentY;
      const newTransformX = Math.abs(currentX - translateX) > 2 ? translateX : currentX;

      // element.style.transform = `translate(${newTransformX}px, ${newTransformY}px)`;
      element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
  }

  destroy() {
    window.removeEventListener('mousemove', this.mouseMoveHandler);
  }

  ngOnDestroy() {
    this.destroy();
  }
}