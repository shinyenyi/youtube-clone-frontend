import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedVideoDetailsComponent } from './saved-video-details/saved-video-details.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const routes: Routes = [
  {
    path: "uploadVideo",
    component: UploadVideoComponent
  },
  {
    path: "savedVideo/:videoId",
    component: SavedVideoDetailsComponent
  },
  {
    path: "videoDetails/:videoId",
    component: VideoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
