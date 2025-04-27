import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionDirective } from '../../../directives/intersection.directive';
import { Section9Component } from './section9.component';
// import { Section9Component } from './section9.component';

@NgModule({
  declarations: [
    // IntersectionDirective,
    Section9Component
  ],
  imports: [
    CommonModule,
    IntersectionDirective
  ],
  exports: [
    // IntersectionDirective,
    Section9Component
  ]
})
export class Section9Module {}
