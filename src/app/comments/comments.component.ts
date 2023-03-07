import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommentsService } from '../comments.service';
import { commentDto } from './commentDto';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input()
  videoId: string = "";
  commentForm: FormGroup;
  commentDto: commentDto[] = [];

  constructor(private commentService: CommentsService, private matSnackbar: MatSnackBar) {
    this.commentForm = new FormGroup({
      comment: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.getAllComments();
  }

  getAllComments() {
    this.commentService.getAllComments(this.videoId).subscribe({
      next: data => {
        this.commentDto = data;
      }
    });
  }

  postComment() {
    const comment = this.commentForm.get('comment')?.value;
    const userId = sessionStorage.getItem("userId");

    const commentDto = {
      "comment": comment,
      "authorId": userId
    }

    this.commentService.postComment(commentDto, this.videoId).subscribe(
      {
        complete: () => {
          this.matSnackbar.open("Comment Posted Successfully", "OK");
          this.commentForm.get('comment')?.reset();
          this.getAllComments();
        }
      }
    );
  }

}
