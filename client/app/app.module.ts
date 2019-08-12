import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
/* Third Party Libs */
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgSelectModule } from '@ng-select/ng-select';

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

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    LoginComponent,
    HomeComponent,
    ApplicationComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonitoringModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
