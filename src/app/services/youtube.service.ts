import { Injectable } from '@angular/core';
import { http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  urlYoutube = 'https://www.googleapis.com/youtube/v3/';
  apikey = 'AIzaSyDvbDa43JeeQHUJlrvw4B-h0cg3bRveo2U';
  canalID = 'UUNlYkTiMV2mnpzuJouKvbpA';

  constructor() { }

  getVideos() {

  }

}
