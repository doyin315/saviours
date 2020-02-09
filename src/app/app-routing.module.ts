import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ErrorComponent} from './error/error.component';
import {GalleryComponent} from './gallery/gallery.component';
import {DropzoneComponent} from './dropzone/dropzone.component';
import {TestComponent} from './test/test.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'error', component: ErrorComponent },
  {path: 'gallery', component: GalleryComponent},
  {path: 'dropzone', component: DropzoneComponent},
  {path: 'test', component: TestComponent },
  {path: '**', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
