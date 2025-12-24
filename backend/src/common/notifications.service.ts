import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  async send(userId: string, message: string) {
    console.log(`[Notification] ${userId}: ${message}`);
  }
}
