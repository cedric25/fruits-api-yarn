import type { PrismaClient } from '@prisma/client'
import plugin from 'fastify-plugin'
import { prismaClient } from '@fruits/prisma'

declare module 'fastify' {
  interface FastifyInstance {
    db: PrismaClient
  }
}

export default plugin(async instance => {
  instance.decorate('db', prismaClient)
})
