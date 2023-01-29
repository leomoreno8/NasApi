import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {DatePipe} from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

import { SlideMenuComponent } from './components/slide-menu/slide-menu.component';
import { ApodApiComponent } from './components/apod-api/apod-api.component';
import { ApodComponent } from './pages/apod/apod.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NeowsComponent } from './pages/neows/neows.component';
import { NeowsApiComponent } from './components/neows-api/neows-api.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponentComponent } from './components/about-us-component/about-us-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'apod-component', component: ApodComponent },
  { path: 'neows-component', component: NeowsComponent },
  { path: 'about-us-component', component: AboutUsComponent},
  { path: 'contact-component', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideMenuComponent,
    ApodComponent,
    HomeComponent,
    ApodApiComponent,
    HomeComponentComponent,
    NeowsComponent,
    NeowsApiComponent,
    AboutUsComponent,
    ContactComponent,
    AboutUsComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    MenuModule,
    RippleModule,
    SlideMenuModule,
    HttpClientModule,
    CalendarModule,
    FormsModule,
    TableModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
