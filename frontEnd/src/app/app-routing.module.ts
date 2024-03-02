import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'articles-resources', component: ArticlesResourcesComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'update-articles', component: UpdateArticlesComponent },
  { path: 'update-courses', component: UpdateCoursesComponent },
  { path: 'update-videos', component: UpdateVideosComponent },
  { path: 'videos', component: VideosComponent }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
