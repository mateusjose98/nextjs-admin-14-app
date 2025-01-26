# Usa uma imagem base do Node.js otimizada para produção
FROM node:18-alpine AS builder

WORKDIR /app

# Copia os arquivos do projeto
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Gera o build da aplicação Next.js
RUN npm run build

# Segunda etapa: Apenas os arquivos necessários
FROM node:18-alpine AS runner

WORKDIR /app

# Copia os arquivos buildados do estágio anterior
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Define variável de ambiente
ENV NODE_ENV=production

# Expõe a porta 3000
EXPOSE 3000

# Inicia o Next.js no modo produção
CMD ["npm", "run", "start"]
