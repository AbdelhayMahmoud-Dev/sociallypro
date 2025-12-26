FROM node:20-alpine

# تثبيت المكتبات الضرورية لتشغيل Prisma
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

COPY package*.json ./

# تثبيت الحزم
RUN npm install --legacy-peer-deps

COPY . .

# توليد ملفات Prisma
RUN npx prisma generate

# بناء المشروع
RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start:prod"]