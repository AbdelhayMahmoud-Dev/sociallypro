import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
// التصحيح هنا: الاستيراد من common بدلاً من notifications
import { NotificationsService } from '../common/notifications.service'; 
import { PrismaService } from '../prisma/prisma.service'; 

@Module({
  controllers: [OrdersController],
  providers: [
    OrdersService, 
    NotificationsService, 
    PrismaService
  ],
  exports: [OrdersService],
})
export class OrdersModule {}