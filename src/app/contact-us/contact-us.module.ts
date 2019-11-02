import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';


@NgModule({
  imports: [
    // SharedModule,
    RouterModule.forChild([
      {path: 'contact-us', component: ContactUsComponent}
    ])
  ],
  declarations: [
    ContactUsComponent
  ]
})
export class ContactUsModule { }
