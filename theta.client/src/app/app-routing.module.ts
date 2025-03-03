import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'solutions',
    loadChildren: () => import('./pages/solution/solution.module').then((m) => m.SolutionModule)
  },
  {
    path: 'technologies',
    loadChildren: () => import('./pages/technologies/technologies.module').then((m) => m.TechnologiesModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/customers/customers.module').then((m) => m.CustomersModule)
  },
  {
    path: 'newsblogs',
    loadChildren: () => import('./pages/news-blogs/news-blogs.module').then((m) => m.NewsBlogsModule)
  },
  {
    path: 'packages',
    loadChildren: () => import('./pages/packages/packages.module').then((m) => m.PackagesModule)
  },
  {
    path: 'careers',
    loadChildren: () => import('./pages/careers/careers.module').then((m) => m.CareersModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule)
  }
];

@NgModule({
  imports: [
    //RouterModule.forRoot(routes, {
    //  preloadingStrategy: PreloadAllModules
    //}),
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
