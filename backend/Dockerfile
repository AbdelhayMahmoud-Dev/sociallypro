FROM node:20-alpine

# إضافة compat-openssl11 لحل مشكلة المكتبة المفقودة
RUN apk add --no-cache openssl libc6-compat compat-openssl11

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