import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/comment.model';
import { User } from 'src/app/models/user.model';
import { ConstantsUtils } from 'src/app/utils/constants.utils';
import { RequestHelper } from 'src/app/models/request-helper.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

  commentToReplay: Comment;
  loading: boolean;
  user: User;

  constructor(private forumService: ForumService, private router: Router, private route: ActivatedRoute) {
    this.loading = true;
    this.user = new User();
    this.user.name = sessionStorage.getItem('name');
    const id = this.route.snapshot.params.id;
    forumService.getComment(id).subscribe(data => {
      this.commentToReplay = data;
      this.loading = false;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

  replay(myForm: NgForm) {
    sessionStorage.setItem('name', myForm.value.name);

    const requestHelper = new RequestHelper();
    requestHelper.name = myForm.value.name;
    requestHelper.comment = myForm.value.comment;

    this.forumService.replayComment(this.commentToReplay.id, requestHelper).subscribe(data => {
      this.router.navigate([ConstantsUtils.HOME_ROUTE]);
    }, error => {
      console.log(error);
    });
  }

  cancel(): void {
    this.router.navigate([ConstantsUtils.HOME_ROUTE]);
  }

}
