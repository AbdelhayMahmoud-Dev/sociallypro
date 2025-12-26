import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from '../prisma/prisma.module';
import { GoogleStrategy } from './google.strategy'; // تأكد من g الصغيرة في المسار

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: 'SUPER_SECRET_KEY_123', // مفتاح التشفير الخاص بك
      signOptions: { expiresIn: '7d' }, 
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    GoogleStrategy // هذا هو السطر الذي سيحل مشكلة "Unknown authentication strategy google"
  ],
})
export class AuthModule {}