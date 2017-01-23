import { ERROR_HANDLER } from './error.handler';
import { User } from './user';
import { CardService } from './card.service';

export const Providers: any[] = [
    ERROR_HANDLER,
    User,
    CardService
];

export { User };
