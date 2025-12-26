import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from '../prisma/prisma.module';
import { GoogleStrategy } from './google.strategy'; // تأكد أن g صغيرة لتطابق اسم ملفك

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: 'SUPER_SECRET_KEY_123',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    GoogleStrategy // هذا هو السطر الذي ينقصك وبدونه لن يعمل "جوجل" أبداً
  ],
})
export class AuthModule {}