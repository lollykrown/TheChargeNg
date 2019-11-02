import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from './videos.reducer';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'home', component: HomeComponent}
    ]),
    StoreModule.forFeature('videos', reducer)
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
