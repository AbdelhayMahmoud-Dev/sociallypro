import { Redis } from 'ioredis';

// استخدم الرابط الخارجي إذا وجد، وإلا استخدم المحلي
export const redis = new Redis(process.env.REDIS_URL || 'redis://127.0.0.1:6379');