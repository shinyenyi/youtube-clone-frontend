import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { commentDto } from './comments/commentDto';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  postComment(commentDto: any, videoId: string): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/videos/" + videoId + "/comment", commentDto);
  }

  getAllComments(videoId: string): Observable<commentDto[]> {
    return this.http.get<commentDto[]>("http://localhost:8080/api/videos/" + videoId + "/comment");
  }
}
