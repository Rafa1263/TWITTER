import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowViewComponent } from './pages/show-view/show-view.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { RegisterViewComponent } from './pages/register-view/register-view.component';
import { CreateViewComponent } from './pages/create-view/create-view.component';
import { ProfileViewComponent } from 'src/app/pages/profile-view/profile-view.component';

const routes: Routes = [
  {
    path: 'show',
    component: ShowViewComponent
  },
  {
    path: 'login',
    component: LoginViewComponent
  },
  {
    path: 'profile',
    component: ProfileViewComponent
  },
  {
    path: 'register',
    component: RegisterViewComponent
  },
  {
    path: 'create',
    component: CreateViewComponent
  },
  {
    path: '', redirectTo: "/show",
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
