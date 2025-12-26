FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application (هذه الخطوة كانت ناقصة وهي الأهم)
RUN npm run build

# Expose the correct port
EXPOSE 8000

# Start in production mode
CMD ["npm", "run", "start:prod"]