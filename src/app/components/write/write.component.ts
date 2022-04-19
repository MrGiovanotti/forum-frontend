import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from 'src/app/models/comment.model';
import { RequestHelper } from 'src/app/models/request-helper.model';
import { User } from 'src/app/models/user.model';
import { ForumService } from 'src/app/services/forum.service';
import { Router } from '@angular/router';
import { ConstantsUtils } from 'src/app/utils/constants.utils';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  user: User;

  constructor(private forumService: ForumService, private router: Router) {
    this.user = new User();
    this.user.name = sessionStorage.getItem('name');
  }

  ngOnInit(): void {
  }

  save(myForm: NgForm) {
    sessionStorage.setItem('name', myForm.value.name);

    const requestHelper = new RequestHelper();
    requestHelper.name = myForm.value.name;
    requestHelper.comment = myForm.value.comment;
    this.forumService.addComment(requestHelper).subscribe(data => {
      this.router.navigate([ConstantsUtils.HOME_ROUTE]);
    }, error => {
      console.log(error);
    });
  }

  cancel(): void {
    this.router.navigate([ConstantsUtils.HOME_ROUTE]);
  }

}
