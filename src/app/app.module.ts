import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { GridsComponent } from './grids/grids.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import {HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ErrorComponent,
    GalleryComponent,
    DropzoneComponent,
    GridsComponent,
    FontawesomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCSeJQ6SHxtVZaEU_ft4NxRpQcY4fpj1B4'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
