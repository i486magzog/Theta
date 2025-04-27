import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { IntersectionDirective } from './directives/intersection.directive';

@NgModule({
  // 현재 애플리케이션에서 사용할 컴포넌트 목록
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    FooterComponent,
  ],
  // Angular 모듈을 가져오는 곳
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IntersectionDirective,
  ],
  // 서비스 제공자
  providers: [],
  // 애플리케이션의 최초 실행 컴포넌트
  bootstrap: [AppComponent]
})
export class AppModule {

}
