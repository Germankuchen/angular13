import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  urlYoutube = 'https://www.googleapis.com/youtube/v3/';
  apikey = 'AIzaSyDvbDa43JeeQHUJlrvw4B-h0cg3bRveo2U';
  canalID = 'PLm_3vnTS-pvkJTrWd87KRrLLlwo9IAgrJ';

  constructor(public http: HttpClient) { }

  getVideos() {
    return this.http.get(this.urlYoutube + 'playlistItems?playlistId=' + this.canalID + '&maxResults=20&part=snippet&key=' + this.apikey);
  }

}
