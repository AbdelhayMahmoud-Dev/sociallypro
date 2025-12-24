import { Controller, Get, Req, UseGuards, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
  
  // 1. مسار بدء تسجيل الدخول عبر جوجل
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    // يتم التوجيه تلقائياً إلى جوجل
  }

  // 2. مسار استقبال بيانات جوجل بعد النجاح
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req) {
    return {
      message: 'User information from Google',
      user: req.user, // بيانات البروفايل المستلمة
    };
  }

  // 3. التحديث المطلوب: مسار جلب بيانات المستخدم المحمي بـ JWT
  @UseGuards(JwtAuthGuard)
  @Get('user/:id')
  async getUserData(@Param('id') id: string) {
    // هذا المسار محمي ولا يمكن دخوله بدون توكن JWT صالح
    return { userId: id, status: 'Authorized access' };
  }
}