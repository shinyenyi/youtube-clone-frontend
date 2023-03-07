import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { FeaturedComponent } from './featured/featured.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';
import { SavedVideoDetailsComponent } from './saved-video-details/saved-video-details.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "subscriptions",
        component: SubscriptionsComponent
      },
      {
        path: "featured",
        component: FeaturedComponent
      },
      {
        path: "history",
        component: HistoryComponent
      },
      {
        path: "likedVideos",
        component: LikedVideosComponent
      }
    ]
  },
  {
    path: "uploadVideo",
    component: UploadVideoComponent
  },
  {
    path: "callback",
    component: CallbackComponent
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
