import { Controller, Post, Param, Get, Body } from '@nestjs/common';
import { orderSyncQueue } from './order-sync.queue';

@Controller('orders')
export class OrdersController {

  @Post(':id/sync')
  async sync(@Param('id') id: string) {
    await orderSyncQueue.add('sync', { orderId: id });
    return { message: 'Sync started' };
  }

  @Get('user/:userId')
  async getUserOrders(@Param('userId') userId: string) {
    // هذا المسار مخصص لجلب طلبات مستخدم معين لتعرض في جدول الطلبات
    return { userId, orders: [] }; 
  }
}