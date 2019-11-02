import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { IVideo } from '../video';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 25px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li> a.active { color: #DF691A;}
  `]
})
export class HeaderComponent implements OnInit {
  errorMessage: string;
  searchWord = '';
  // foundVideo: IVideo | undefined;
  foundVideos: IVideo[];

  constructor(private videoService: VideoService) { }

  // searchVideos(searchWord) {
  //   this.videoService.searchVideos(searchWord)
  //     .subscribe(videos => this.foundVideos = videos );
  //   console.log(this.foundVideos);
  // }

  searchVideo(s: string) {
    this.videoService.getVideos().
      subscribe(
        (data: IVideo[]) => this.foundVideos = data.filter(el => el.name = s),
        () => console.log(this.foundVideos)
      );
  }

  ngOnInit() {
  }

}
