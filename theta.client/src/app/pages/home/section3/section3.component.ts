import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ParallaxScrollService } from '../../../services/parallax.scroll.service';
@Component({
  selector: 'app-section3',
  standalone: true,
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css',
  providers: [ParallaxScrollService]
})

export class Section3Component implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private parallaxService: ParallaxScrollService,
    private elRef: ElementRef
  ) {}
  ngOnInit() {}

  ngAfterViewInit() {
    const parentElement = this.elRef.nativeElement; // 👈 이게 현재 컴포넌트의 최상위 element
    this.parallaxService.initParallax(parentElement, []);
  }

  ngOnDestroy(): void {
    this.parallaxService.destroy();
  }
}
