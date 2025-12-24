import { Queue } from 'bullmq';
import { redis } from '../common/redis';

export const orderSyncQueue = new Queue('order-sync', {
  connection: redis,
});
