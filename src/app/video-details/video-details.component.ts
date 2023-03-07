import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SavedVideoDetailsService } from '../saved-video-details/saved-video-details.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  videoId = '';
  videoUrl = '';
  videoAvailable = false;
  videoTitle = '';
  videoDescription = '';
  videoTags: string[] = [];
  likeCount: number = 0;
  dislikeCount: number = 0;
  viewCount: number = 0;
  subscribed = false;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserServiceService,
    private savedVideoDetailsService: SavedVideoDetailsService) {
    this.videoId = this.activatedRoute.snapshot.params['videoId'];

    this.savedVideoDetailsService.getVideo(this.videoId).subscribe({
      next: data => {
        this.videoUrl = data.videoUrl;
        this.videoDescription = data.description;
        this.videoTags = data.tags;
        this.videoTitle = data.title;
        this.likeCount = data.likeCount;
        this.dislikeCount = data.dislikeCount;
        this.viewCount = data.viewCount;
      },
      error: error => { },
      complete: () => {
        this.videoAvailable = true;
      }
    });
  }

  ngOnInit(): void {
  }

  likeVideo() {
    this.savedVideoDetailsService.likeVideo(this.videoId).subscribe(
      {
        next: data => {
          this.likeCount = data.likeCount;
          this.dislikeCount = data.dislikeCount;
        }
      }
    );
  }

  dislikeVideo() {
    this.savedVideoDetailsService.dislikeVideo(this.videoId).subscribe(
      {
        next: data => {
          this.likeCount = data.likeCount;
          this.dislikeCount = data.dislikeCount;
        }
      }
    );
  }

  subscribeToUser() {
    let userId = sessionStorage.getItem("userId")!;
    this.userService.subscribeToUser(userId).subscribe({
      next: data => { this.subscribed = data }
    });
  }

  unSubscribeFromUser() {
    let userId = sessionStorage.getItem("userId")!;
    this.userService.unSubscribeFromUser(userId).subscribe({
      next: data => { this.subscribed = !data }
    });
  }
}
