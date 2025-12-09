# ---- Build stage ----
FROM node:20 AS builder

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build-time env for Vite
ARG VITE_API_URL
ARG VITE_TENANT

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_TENANT=$VITE_TENANT

# Build static files
RUN npm run build

# ---- Runtime stage ----
FROM nginx:alpine

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]