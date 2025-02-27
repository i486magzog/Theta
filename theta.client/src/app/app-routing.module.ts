import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SolutionComponent } from './solution/solution.component';
import { CustomersComponent } from './customers/customers.component';
import { NewsBlogsComponent } from './news-blogs/news-blogs.component';
import { PackagesComponent } from './packages/packages.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'solutions', component: SolutionComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'newsblogs', component: NewsBlogsComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

