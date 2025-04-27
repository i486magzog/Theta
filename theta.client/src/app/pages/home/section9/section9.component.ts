import { Component, EventEmitter, Output, ElementRef, AfterViewInit, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-section9',
  standalone: false,
  templateUrl: './section9.component.html',
  styleUrl: './section9.component.css'
})

export class Section9Component implements OnInit, AfterViewInit, OnDestroy {
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(event: Event) {
   const target = this.el.nativeElement;
   const rect = target.getBoundingClientRect();
    const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
   //this.inView.emit(isInView);

   if (isInView) {
     console.log("IN");
   } else {
     console.log("OUT");
   }
  }

  handleInView(isVisible: boolean) {
    if (isVisible) {
      console.log('Visible');
    } else {
      console.log('Not Visible');
    }
  }

  ngOnDestroy(): void {

  }
}
