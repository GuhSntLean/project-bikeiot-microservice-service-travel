import { Channel, connect, Connection, Message } from "amqplib";

class RabbitMQServer {
  private conn: Connection;
  private channel: Channel;

  async start(): Promise<void> {
    this.conn = await connect("amqp://guest:guest@localhost:5672");
    this.channel = await this.conn.createChannel();
  }

  async consume(queue: string, callback: (message: Message) => void) {
    return this.channel.consume(queue, (message) => {
      callback(message);
      this.channel.ack(message);
    });
  }
}

export { RabbitMQServer };
