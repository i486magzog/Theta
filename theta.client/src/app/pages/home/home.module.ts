import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { Section7Component } from './section7/section7.component';
import { Section8Component } from './section8/section8.component';
// import { Section9Component } from './section9/section9.component';
import { BgAnimationComponent } from './bg-animation/bg-animation.component';
import { Section9Module } from './section9/section9.module';
//import { IntersectionDirective } from '../../directives/intersection.directive';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    //IntersectionDirective,
  ],
  imports: [
    CommonModule,
    HeroComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
    Section9Module,
    //Section9Component,
    BgAnimationComponent,
    RouterModule.forChild(routes),
  ],
  exports: [HomeComponent]
})
export class HomeModule {

  //handleInView(isInView: boolean) {
  //  if (isInView) {
  //    console.log('Section9Component is in view');
  //  } else {
  //    console.log('Section9Component is out of view');
  //  }
  //}


}
