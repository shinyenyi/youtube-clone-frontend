import { Component, OnInit } from '@angular/core';
import { videoDto } from '../saved-video-details/videoDto';
import { FeaturedService } from './featured.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  featuredVideos: videoDto[] = [];

  constructor(private featuredService: FeaturedService) { }

  ngOnInit(): void {
    this.featuredService.getAllVideos().subscribe(
      {
        next: data => { this.featuredVideos = data },
        error: error => { },
        complete: () => { }
      }
    );
  }

}
