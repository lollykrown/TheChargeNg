import { Component, OnInit } from '@angular/core';
import { IVideo } from 'src/app/video';
import { VideoService } from 'src/app/video.service';
import { Router, ActivatedRoute, NavigationEnd, RoutesRecognized } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  pageTitle = 'Video Detail';
  errorMessage = '';
  video: IVideo | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private videoService: VideoService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    // if (param) {
    //   const id = +param;
    //   this.getVideo(id);
    // }

    const id = +param;
    this.videoService.getVideos()
    .subscribe(
      (data: IVideo[]) => this.video = data.find(v => v.id === id),
      (err: any ) => console.log(err),
      () => console.log(this.video)
    );

  }

  // getVideo(id: number) {
  //   this.videoService.getVideo(id).subscribe(
  //     video => this.video = video,
  //     error => this.errorMessage = <any>error);
  // }

}
