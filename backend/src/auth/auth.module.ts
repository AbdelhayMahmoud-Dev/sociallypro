import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from '../prisma/prisma.module';
import { GoogleStrategy } from './google.strategy'; // تأكد من أن المسار يبدأ بـ g صغير كما سميت الملف

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: 'SUPER_SECRET_KEY_123', // مفتاح التشفير الخاص بك
      signOptions: { expiresIn: '7d' }, // مدة صلاحية التوكن 7 أيام
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    GoogleStrategy // تم إضافة GoogleStrategy هنا ليتعرف السيرفر على نظام جوجل
  ],
})
export class AuthModule {}