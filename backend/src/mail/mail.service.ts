import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendInfoMessage(req: Object) {
    var text = Object.entries(req).map(it => `${it[0]}: ${it[1]}`).join('\n');
    await this.mailerService.sendMail({
      to: 'jacobzzzzz572@gmail.com',
      // from: '"Support Team" <support@example.com>',
      subject: 'Someone filled out the form!',
      text: text.toString(),
    });
  }
}