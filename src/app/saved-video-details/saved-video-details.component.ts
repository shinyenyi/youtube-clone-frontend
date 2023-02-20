import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { SavedVideoDetailsService } from './saved-video-details.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { videoDto } from './videoDto';


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
  selectedFile!: File;
  selectedFileName: string = '';
  videoId = '';
  thumbnailUrl = '';
  fileSelected = false;
  videoUrl!: string;

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: string[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private savedVideoDetailsService: SavedVideoDetailsService,
    private matSnackbar: MatSnackBar) {
    this.videoId = this.activatedRoute.snapshot.params['videoId'];
    this.saveVideoDetailsForm = new FormGroup({
      title: this.title,
      description: this.description,
      videoStatus: this.videoStatus
    });

    this.savedVideoDetailsService.getVideo(this.videoId).subscribe({
      next: data => { this.videoUrl = data.videoUrl },
      error: error => { },
      complete: () => { console.log(this.videoUrl) }
    });
  }

  ngOnInit(): void {
  }

  saveVideo() {

    const videoDetails: videoDto = {
      "id": this.videoId,
      "title": this.saveVideoDetailsForm.get('title')?.value,
      "description": this.saveVideoDetailsForm.get('description')?.value,
      "tags": this.tags,
      "videoUrl": this.videoUrl,
      "videoStatus": this.saveVideoDetailsForm.get('videoStatus')?.value,
      "thumbnailUrl": this.thumbnailUrl,
    }

    console.log(videoDetails)

    this.savedVideoDetailsService.saveVideo(videoDetails).subscribe({
      next: data => { },
      error: error => { },
      complete: () => {
        this.matSnackbar.open("vidoe details saved", "OK");
      }
    });
  }

  onFileSelected(event: Event) {
    // @ts-ignore
    this.selectedFile = event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
    this.fileSelected = true;
  }

  uploadThumnail() {
    this.savedVideoDetailsService.uploadThumnail(this.selectedFile, this.videoId).subscribe({
      next: data => { this.thumbnailUrl = data },
      error: error => { },
      complete: () => {
        this.matSnackbar.open("Thumbnail uploaded successful", "OK");
        console.log("**********|||||||||");
        this.fileSelected = false;
      }
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(tag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove tag
    if (!value) {
      this.remove(tag);
      return;
    }

    // Edit existing tag
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index] = value;
    }
  }

}
