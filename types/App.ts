import { InfoEvent, SubscribedEvent } from './events'
import { OrderBook } from './order-book'

export interface AppState {
        productId: string
        feed: string
        socket: WebSocket | null
        info: InfoEvent | null
        subscribed: SubscribedEvent | null
        book: OrderBook | null
}
