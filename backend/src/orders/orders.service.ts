import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { NotificationsService } from '../common/notifications.service';

const prisma = new PrismaClient();

@Injectable()
export class OrdersService {
  constructor(private notify: NotificationsService) {}

  async createOrder(data: any) {
    return prisma.order.create({
      data: {
        ...data,
        status: 'PENDING',
      },
    });
  }

  async getUserOrders(userId: string) {
    return prisma.order.findMany({
      where: { userId },
      include: { supplier: true },
    });
  }

  async updateStatus(id: string, status: string) {
    const order = await prisma.order.update({
      where: { id },
      data: { status },
    });

    await this.notify.send(
      order.userId, 
      `تم تحديث حالة الطلب إلى ${status}`
    );
    
    return order;
  }
}