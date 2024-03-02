import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ArticlesResourcesComponent } from './pages/articles-resources/articles-resources.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { UpdateArticlesComponent } from './pages/update-articles/update-articles.component';
import { UpdateCoursesComponent } from './pages/update-courses/update-courses.component';
import { UpdateVideosComponent } from './pages/update-videos/update-videos.component';
import { VideosComponent } from './pages/videos/videos.component';


import { AppRoutingModule } from './app-routing.module'; // Make sure this is the correct path
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
    CoursesComponent,
    ArticlesResourcesComponent,
    ContattiComponent,
    DashboardComponent,
    LoginComponent,
    PaymentComponent,
    SubscriptionComponent,
    UpdateArticlesComponent,
    UpdateCoursesComponent,
    UpdateVideosComponent,
    VideosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // ... any other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
