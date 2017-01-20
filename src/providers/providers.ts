import { ERROR_HANDLER } from './error.handler';
import { User } from './user';
import { ListService } from './list.service'

export const Providers: any[] = [
  ERROR_HANDLER,
  User,
    ListService
];

export { User };
