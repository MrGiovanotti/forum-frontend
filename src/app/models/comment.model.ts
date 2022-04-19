import { User } from './user.model';

export class Comment {
  id: string;
  content: string;
  date: string;
  user: User;
  responses: Array<Comment>;
}
