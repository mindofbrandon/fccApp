import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // add httpclient to consume rest api
import {MatToolbarModule} from '@angular/material/toolbar'; // container for headers titles and actions
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; // container for text photos and actions of a single subject
import {MatButtonModule} from '@angular/material/button'; // native <button> and <a> elements with material design styling
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';// circular indicator of progress and activity

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // declare httpclient import
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
