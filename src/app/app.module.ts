import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found.component';
import { AboutUsModule } from './about-us/about-us.module';
import { ActivityModule } from './activity/activity.module';
import { ArchivesModule } from './archives/archives.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { VideoDetailsComponent } from './home/video-details/video-details.component';
import { HomeModule } from './home/home.module';
import { SafePipe } from './home/safe-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    VideoDetailsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    AboutUsModule,
    ArchivesModule,
    ActivityModule,
    ContactUsModule,
    AppRoutingModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
