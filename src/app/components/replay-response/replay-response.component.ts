import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/comment.model';
import { User } from 'src/app/models/user.model';
import { ConstantsUtils } from 'src/app/utils/constants.utils';
import { RequestHelper } from 'src/app/models/request-helper.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-replay-response',
  templateUrl: './replay-response.component.html',
  styleUrls: ['./replay-response.component.css']
})
export class ReplayResponseComponent implements OnInit {

  responseToReplay: Comment;
  loading: boolean;
  user: User;

  constructor(private forumService: ForumService, private router: Router, private route: ActivatedRoute) {
    this.loading = true;
    this.user = new User();
    this.user.name = sessionStorage.getItem('name');
    const commentId = this.route.snapshot.params.commentId;
    const responseId = this.route.snapshot.params.responseId;
    forumService.getResponse(commentId, responseId).subscribe(data => {
      this.responseToReplay = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

  replayResponse(myForm: NgForm) {
    sessionStorage.setItem('name', myForm.value.name);
    const requestHelper = new RequestHelper();
    requestHelper.name = myForm.value.name;
    requestHelper.comment = myForm.value.comment;

    const commentId = this.route.snapshot.params.commentId;

    this.forumService.replayResponse(commentId, this.responseToReplay.id, requestHelper).subscribe(data => {
      this.router.navigate([ConstantsUtils.HOME_ROUTE]);
    }, error => {
      console.log(error);
    });
  }

  cancel(): void {
    this.router.navigate([ConstantsUtils.HOME_ROUTE]);
  }

}
