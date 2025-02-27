import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CustomersComponent } from './customers/customers.component';
import { AboutComponent } from './about/about.component';
import { NewsBlogsComponent } from './news-blogs/news-blogs.component';
import { PackagesComponent } from './packages/packages.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  // 현재 애플리케이션에서 사용할 컴포넌트 목록
  declarations: [
    AppComponent,
    HomeComponent,
    SolutionComponent,
    TechnologiesComponent,
    CustomersComponent,
    AboutComponent,
    NewsBlogsComponent,
    PackagesComponent,
    CareersComponent,
    ContactComponent
  ],
  // Angular 모듈을 가져오는 곳
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  // 서비스 제공자
  providers: [],
  // 애플리케이션의 최초 실행 컴포넌트
  bootstrap: [AppComponent]
})
export class AppModule {

}
