import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadVideoService {

  constructor(private http: HttpClient) { }

  uploadVideo(fileEntry: File) {

    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name)

    return this.http.post("http://localhost:8080/api/videos", formData);

  }
}
