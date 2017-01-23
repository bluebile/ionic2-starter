import { ERROR_HANDLER } from './error.handler';
import { User } from './user';
import { ListService } from './list.service';
import { CardService } from './card.service';

export const Providers: any[] = [
    ERROR_HANDLER,
    User,
    ListService,
    CardService
];

export { User };
