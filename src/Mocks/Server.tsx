import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const server = setupServer(
  rest.get('https://61f5037b62f1e300173c3f8d.mockapi.io/node', (req, res, ctx) => {
    return res(ctx.json([{ id: '1', name: 'Root', children: [] }]))
  })
)
