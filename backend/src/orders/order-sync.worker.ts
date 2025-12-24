import { Worker } from 'bullmq';
import axios from 'axios';
import { redis } from '../common/redis';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const orderSyncWorker = new Worker(
  'order-sync',
  async (job) => {
    const { orderId } = job.data;

    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { supplier: true },
    });

    if (!order) throw new Error('Order not found');

    const response = await axios.get(
      `${order.supplier.apiUrl}/status`,
      {
        headers: { Authorization: `Bearer ${order.supplier.apiKey}` },
        params: { reference: order.externalReference },
      }
    );

    await prisma.order.update({
      where: { id: orderId },
      data: { status: response.data.status },
    });
  },
  {
    connection: redis,
  }
);