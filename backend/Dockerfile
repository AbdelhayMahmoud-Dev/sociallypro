# تغيير النظام إلى debian (slim) لحل مشاكل المكتبات نهائياً
FROM node:20-slim

# تحديث وتثبيت openssl الضروري
RUN apt-get update -y && apt-get install -y openssl

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