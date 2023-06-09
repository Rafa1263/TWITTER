import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/outlet/app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CommentPrevviewComponent } from './components/comment-prevview/comment-prevview.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ShowViewComponent } from './pages/show-view/show-view.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterViewComponent } from './pages/register-view/register-view.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CreateViewComponent } from './pages/create-view/create-view.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { ProfileComponent } from './components/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CommentPrevviewComponent,
    NotFoundComponent,
    ShowViewComponent,
    LoginViewComponent,
    RegisterViewComponent,
    CreatePostComponent,
    CreateViewComponent,
    ProfileViewComponent,
    ProfileComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "Twitter"
}
