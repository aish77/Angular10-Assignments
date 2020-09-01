import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  {
    path:'About', component: AboutComponentComponent
  },
  {
    path:'Contact', component: ContactComponentComponent
  },
  {
    path:'Home', component: HomeComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
