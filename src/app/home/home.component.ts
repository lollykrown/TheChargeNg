import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { IVideo } from '../video';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: IVideo[] = [];
  errorMessage: string;
  displayCode: boolean;

  constructor(private store: Store<any>,
              private videoService: VideoService) {}

  ngOnInit() {
    this.videoService.getVideos().subscribe({
      next: videos => {
        this.videos = videos;
      },
      error: err => this.errorMessage = err
    });

    this.store.pipe(select('videos')).subscribe(
      products => {
        if (products) {
          this.displayCode = products.showProductCode;
        }
      });
  }

  stateChanged(value: boolean): void {
    this.store.dispatch({
      type: 'TOGGLE_VIDEO_CODE',
      payload: value
    });
  }

  shareClicked() {
    console.log('share button clicked');
  }
}
