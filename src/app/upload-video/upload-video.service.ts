import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { uploadVideoResponse } from './upload-video-request-response';

@Injectable({
  providedIn: 'root'
})
export class UploadVideoService {

  constructor(private http: HttpClient) { }

  uploadVideo(fileEntry: File): Observable<uploadVideoResponse> {

    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name)

    return this.http.post<uploadVideoResponse>("http://localhost:8080/api/videos", formData);

  }
}
