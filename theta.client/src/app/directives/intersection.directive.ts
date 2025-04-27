import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[appIntersection]'
})
export class IntersectionDirective implements OnInit, OnDestroy {
  // 화면에 보이기 시작(또는 사라질 때) true/false를 내보냄
  @Output() inView = new EventEmitter<boolean>();

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    // 1. IntersectionObserver 인스턴스 생성
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(entry)
        // 화면에 보이면 true, 아니면 false
        this.inView.emit(entry.isIntersecting);
      });
    });

    // 2. 특정 대상 요소 관찰 시작
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    // 3. 메모리 누수를 방지하기 위해 해제
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
