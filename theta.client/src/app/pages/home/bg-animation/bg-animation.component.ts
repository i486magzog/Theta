import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg-animation',
  standalone: true,
  templateUrl: './bg-animation.component.html',
  styleUrl: './bg-animation.component.css'
})
export class BgAnimationComponent implements OnInit {
  private lastX: number = 0;
  private lastY: number = 0;
  private winWidth: number = 0;
  private winHeight: number = 0;

  ngOnInit() {
    this.winWidth = window.innerWidth;
    this.winHeight = window.innerHeight;
  }
  
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;

    const rightWave = document.querySelector('.right-wave') as HTMLElement;
    if (rightWave) {
      const x = event.clientX;
      const y = event.clientY;
      const deltaX = (x / this.winWidth);
      const deltaY = (y / this.winHeight);

      const topWave = document.querySelector('.top-wave') as HTMLElement;
      if (topWave) {
        topWave.style.transition = 'transform 0.5s ease-out';
        topWave.style.transform = `translate3d(${-deltaX*20-0.0786}%, ${-deltaY}%, 0)`;
      }

      const rightWave = document.querySelector('.right-wave') as HTMLElement;
      if (rightWave) {
        rightWave.style.transition = 'transform 1s ease-out';
        rightWave.style.transform = `translate3d(${-deltaX*8 + 4.9607}%, ${-deltaY*10-2.8296}%, 0)`;
      }

      this.lastX = x;
      this.lastY = y;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = this.winWidth = window.innerWidth;
    const height = this.winHeight = window.innerHeight;
  }
}
