import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { videoDto } from '../saved-video-details/videoDto';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService {

  constructor(private http: HttpClient) { }

  getAllVideos(): Observable<videoDto[]> {
    return this.http.get<videoDto[]>("http://localhost:8080/api/videos");
  }
}
