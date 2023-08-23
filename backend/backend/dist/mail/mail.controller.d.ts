import { MailService } from './mail.service';
export declare class MailController {
    private mailService;
    constructor(mailService: MailService);
    sendInfoMessage(req: JSON): void;
}
