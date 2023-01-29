import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { ApodComponent } from './pages/apod/apod.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NeowsComponent } from './pages/neows/neows.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apod-component', component: ApodComponent },
  { path: 'neows-component', component: NeowsComponent},
  { path: 'about-us-component', component: AboutUsComponent},
  { path: 'contact-component', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
