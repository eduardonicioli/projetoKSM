import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createUserRoute } from './create-user-route'

export const usersRoutes: FastifyPluginAsyncZod = async app => {
  await app.register(createUserRoute)
}
