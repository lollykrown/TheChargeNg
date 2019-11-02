import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { VideoDetailsComponent } from './home/video-details/video-details.component';


const routes: Routes = [
  {path: 'home', loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule)
  },
  {path: 'videos/:id', component: VideoDetailsComponent },
  {path: 'about-us', loadChildren: () =>
      import('./about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {path: 'archives', loadChildren: () =>
      import('./archives/archives.module').then(m => m.ArchivesModule)
  },
  {path: 'activity', loadChildren: () =>
      import('./activity/activity.module').then(m => m.ActivityModule)
  },
  {path: 'contact-us', loadChildren: () =>
      import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {path:  '', pathMatch:  'full', redirectTo:  'home'},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
