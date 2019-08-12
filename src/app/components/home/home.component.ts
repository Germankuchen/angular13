import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Video } from '../../classes/video.class';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nextPageToken: string;
  videos: Video[] = [];
  videoSeleccionado: Video = new Video('', '', '');

  constructor(public _youTubeService: YoutubeService) { 
    this._youTubeService.getVideos(this.nextPageToken).subscribe(info => {
      this.nextPageToken = info['nextPageToken'];
      for (let videoNum = 0; videoNum < info['items'].length; videoNum++) {
        const video = new Video(info['items'][videoNum].snippet.thumbnails.high.url, info['items'][videoNum].snippet.resourceId.videoId,
          info['items'][videoNum].snippet.title);
        this.videos.push(video);
      }
    });
  }

  cargarMas() {
    this._youTubeService.getVideos(this.nextPageToken).subscribe(info => {
      this.nextPageToken = info['nextPageToken'];
      for (let videoNum = 0; videoNum < info['items'].length; videoNum++) {
        const video = new Video(info['items'][videoNum].snippet.thumbnails.high.url, info['items'][videoNum].snippet.resourceId.videoId,
          info['items'][videoNum].snippet.title);
        this.videos.push(video);
      }
    });
  }

  verVideo(videoElegido: Video) {
    console.log('Se eligio el video: ' + videoElegido.id);
    this.videoSeleccionado = videoElegido;
    this.videoSeleccionado.src = 'http://www.youtube.com/embed/' + this.videoSeleccionado.id + '?autoplay=1';
    $('#exampleModal').modal();
  }

  cerrarModal() {
    this.videoSeleccionado = null;
    $('#exampleModal').modal('hide');
  }

  ngOnInit() {
  }

}
