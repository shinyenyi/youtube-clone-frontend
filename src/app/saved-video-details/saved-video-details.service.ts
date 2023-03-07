import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { videoDto } from './videoDto';

@Injectable({
  providedIn: 'root'
})
export class SavedVideoDetailsService {

  constructor(private http: HttpClient) { }

  uploadThumnail(fileEntry: File, videoId: string): Observable<string> {

    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name)
    formData.append('videoId', videoId)

    return this.http.post("http://localhost:8080/api/videos/thumbnail", formData, { responseType: 'text' });

  }

  getVideo(videoId: string): Observable<videoDto> {
    return this.http.get<videoDto>("http://localhost:8080/api/videos/" + videoId)
  }

  saveVideo(videoDetails: videoDto): Observable<videoDto> {
    return this.http.put<videoDto>("http://localhost:8080/api/videos", videoDetails);
  }

  likeVideo(videoId: string): Observable<videoDto> {
    return this.http.post<videoDto>("http://localhost:8080/api/videos/" + videoId + "/like", null);
  }

  dislikeVideo(videoId: string): Observable<videoDto> {
    return this.http.post<videoDto>("http://localhost:8080/api/videos/" + videoId + "/dislike", null);
  }
}
