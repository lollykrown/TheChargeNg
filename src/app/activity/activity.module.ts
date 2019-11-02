import { NgModule } from '@angular/core';
import { ActivityComponent } from './activity.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    // SharedModule,
    RouterModule.forChild([
      {path: 'activity', component: ActivityComponent}
    ])
  ],
  declarations: [
    ActivityComponent
  ]
})
export class ActivityModule { }
