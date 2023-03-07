import { Component, Input, OnInit } from '@angular/core';
import { videoDto } from '../saved-video-details/videoDto';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  @Input()
  video!: videoDto;

  constructor() { }

  ngOnInit(): void {

  }

}
