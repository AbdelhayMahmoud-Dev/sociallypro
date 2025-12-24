import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Roles } from '../common/roles.decorator';
import { RolesGuard } from '../common/roles.guard';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { orderSyncQueue } from '../orders/order-sync.queue';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class AdminController {
  @Get('sync/:orderId')
  async manualSync(@Param('orderId') orderId: string) {
    await orderSyncQueue.add('sync', { orderId });
    return { message: 'Manual sync triggered' };
  }
}
