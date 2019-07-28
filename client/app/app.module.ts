import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
/* Third Party Libs */
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
/* Relative Imports*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationComponent } from './layouts/application/application.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MonitoringModule } from './pages/monitoring/monitoring.module';
import { AlertComponent } from './components/alert/alert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    LoginComponent,
    HomeComponent,
    ApplicationComponent,
    SidebarComponent,
    TopbarComponent,
    AlertComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonitoringModule,
    FormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
