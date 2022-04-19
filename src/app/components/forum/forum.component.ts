import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/models/forum.model';
import { ForumService } from 'src/app/services/forum.service';
import { ConstantsUtils } from 'src/app/utils/constants.utils';

@Component({
  selector: 'app-foro',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  comments: Array<Comment>;

  WRITE_ROUTE: string;
  REPLAY_ROUTE: string;

  loading: boolean;

  constructor(private forumService: ForumService) {
    this.WRITE_ROUTE = '/'.concat(ConstantsUtils.WRITE_ROUTE);
    this.REPLAY_ROUTE = '/'.concat(ConstantsUtils.REPLAY_ROUTE).replace(':id', '');
  }

  ngOnInit(): void {
    this.loading = true;
    this.forumService.getForum().subscribe(data => {
      this.comments = data.comments;
      this.loading = false;
    }, err => {
      console.log(err);
    });
  }

}
