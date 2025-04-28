import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ParallaxScrollService } from '../../../services/parallax.scroll.service';
@Component({
  selector: 'app-section9',
  standalone: false,
  templateUrl: './section9.component.html',
  styleUrl: './section9.component.css',
  providers: [ParallaxScrollService]
})

export class Section9Component implements OnInit, AfterViewInit, OnDestroy {

  constructor(private parallaxService: ParallaxScrollService) {}
  ngOnInit() {}

  ngAfterViewInit() {
    this.parallaxService.initParallax('.section', []);
  }

  ngOnDestroy(): void {
    this.parallaxService.destroy();
  }
}
