import {
  http,
  HttpResponse,
  type RequestHandler,
  type WebSocketHandler
} from 'msw'
import { setupServer } from 'msw/node'

const handlers: Array<RequestHandler | WebSocketHandler> = [
  http.get('http://api.example.com', async function () {
    return HttpResponse.json({ message: 'Aaa' })
  })
]

export const server = setupServer(...handlers)
