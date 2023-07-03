import { Users } from './Users';

export type ArticleProps = {
  id: number;
  title: string;
  content: string;
  users: Users[];
};
