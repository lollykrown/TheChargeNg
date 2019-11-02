import { NgModule } from '@angular/core';
import { ArchivesComponent } from './archives.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    // SharedModule,
    RouterModule.forChild([
      {path: 'archives', component: ArchivesComponent}
    ])
  ],
  declarations: [
    ArchivesComponent
  ]
})
export class ArchivesModule { }
