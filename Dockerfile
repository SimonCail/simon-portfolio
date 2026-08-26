# syntax=docker/dockerfile:1

# Build multi-stage : les dependances et la compilation restent dans des etages
# jetes a la fin. Seule la sortie "standalone" de Next arrive dans l'image
# finale, ce qui evite d'embarquer les ~500 Mo de node_modules.

# ---------------------------------------------------------------- deps
FROM node:22-alpine AS deps
WORKDIR /app
# On copie d'abord les manifestes seuls : tant qu'ils ne changent pas, Docker
# reutilise le cache de cette couche et ne reinstalle rien.
COPY package.json package-lock.json ./
RUN npm ci

# ---------------------------------------------------------------- builder
FROM node:22-alpine AS builder
WORKDIR /app
# Declenche output: "standalone" dans next.config.mjs, uniquement ici : la
# config reste inchangee pour un deploiement Vercel classique.
ENV DOCKER_BUILD=1
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------------------------------------------------------------- runner
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Utilisateur non root : un conteneur qui tourne en root est un conteneur de
# trop dans une chaine de deploiement.
RUN addgroup -g 1001 -S nodejs && adduser -u 1001 -S nextjs -G nodejs

COPY --from=builder /app/public ./public
# standalone contient server.js et le strict minimum de node_modules.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# Les assets statiques ne sont pas inclus dans standalone : il faut les copier.
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
