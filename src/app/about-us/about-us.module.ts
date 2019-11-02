import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    // SharedModule,
    RouterModule.forChild([
      {path: 'about-us', component: AboutUsComponent}
    ])
  ],
  declarations: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
