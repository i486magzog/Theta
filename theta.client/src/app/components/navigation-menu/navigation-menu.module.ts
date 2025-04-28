import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from './navigation-menu.component';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationMenuComponent],
  imports: [
    CommonModule,
    // RouterModule
  ],
  exports: [NavigationMenuComponent]
})
export class NavigationMenuModule { }
