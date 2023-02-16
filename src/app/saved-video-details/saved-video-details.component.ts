import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-saved-video-details',
  templateUrl: './saved-video-details.component.html',
  styleUrls: ['./saved-video-details.component.scss']
})
export class SavedVideoDetailsComponent implements OnInit {

  saveVideoDetailsForm!: FormGroup;
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  videoStatus: FormControl = new FormControl('')

  constructor() {
    this.saveVideoDetailsForm = new FormGroup({
      title: this.title,
      description: this.description,
      videoStatus: this.videoStatus
    });
  }

  ngOnInit(): void {
  }

}
