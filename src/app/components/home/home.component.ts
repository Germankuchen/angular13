import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Video } from '../../classes/video.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nextPageToken: string;
  videos: Video[] = [];

  constructor(public _youTubeService: YoutubeService) { 
    this._youTubeService.getVideos().subscribe(info => {
      console.log(info);
      this.nextPageToken = info['nextPageToken'];
      console.log('La próxima página puede ser devuelta con el siguiente token: ' + this.nextPageToken);
      for (let videoNum = 0; videoNum < info['items'].length; videoNum++) {
        const video = new Video(info['items'][videoNum].snippet.thumbnails.high.url, info['items'][videoNum].snippet.resourceId.videoId,
          info['items'][videoNum].snippet.title);
        this.videos.push(video);
      }
    });
  }

  verVideo(id: string) {
    console.log(id);
  }

  ngOnInit() {
  }

}
