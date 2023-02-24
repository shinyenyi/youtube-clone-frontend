import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SavedVideoDetailsService } from '../saved-video-details/saved-video-details.service';

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

  constructor(private activatedRoute: ActivatedRoute,
    private savedVideoDetailsService: SavedVideoDetailsService) {
    this.videoId = this.activatedRoute.snapshot.params['videoId'];

    this.savedVideoDetailsService.getVideo(this.videoId).subscribe({
      next: data => {
        this.videoUrl = data.videoUrl;
        this.videoDescription = data.description;
        this.videoTags = data.tags;
        this.videoTitle = data.title
      },
      error: error => { },
      complete: () => {
        this.videoAvailable = true;
      }
    });
  }

  ngOnInit(): void {
  }
}
