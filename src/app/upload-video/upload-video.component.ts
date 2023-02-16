import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { uploadVideoResponse } from './upload-video-request-response';
import { UploadVideoService } from './upload-video.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent implements OnInit {

  fileUploaded: boolean = false;
  public files: NgxFileDropEntry[] = [];
  fileEntry!: FileSystemFileEntry;
  uploadVideoResponse!: uploadVideoResponse;

  constructor(private uploadVideoService: UploadVideoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  uploadVideo() {
    if (this.fileEntry !== undefined) {
      this.fileEntry.file(file => {
        this.uploadVideoService.uploadVideo(file).subscribe(
          {
            next: data => {
              this.uploadVideoResponse = data;
              console.log(this.uploadVideoResponse);
            },
            error: (error) => { console.log(error) },
            complete: () => {
              console.log("video successfully uploaded")
              this.fileUploaded = false;
              this.files = [];
              this.router.navigate(["/savedVideo/" + this.uploadVideoResponse.videoId]);
            }
          }
        );
      });
    }
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        this.fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        this.fileEntry.file((file: File) => {

          // Here you can access the real file
          this.fileUploaded = true;
          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }

}
