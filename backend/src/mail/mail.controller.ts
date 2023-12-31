import { Controller } from '@nestjs/common';
import { MailService } from './mail.service';
import { Post, Body } from '@nestjs/common';
@Controller('/api/mail')
export class MailController {
    constructor(private mailService: MailService) { }
    @Post()
    sendInfoMessage(@Body() req: object) {
        this.mailService.sendInfoMessage(req);
    }
}
