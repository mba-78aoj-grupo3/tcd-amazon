import { KafkaClient, Consumer, Producer, ProduceRequest } from 'kafka-node'
import Env from '@ioc:Adonis/Core/Env'

export default class Notification {
  /**
   *
   *
   * @static
   * @param {string} topic
   * @memberof Notification
   */
  public static consumeEvents(topic: string) {
    console.log(Env.get('KAFKA_SERVER'))
    const client = new KafkaClient(Env.get('KAFKA_SERVER'))
    const consumer = new Consumer(client, [{ topic }], { autoCommit: false })

    consumer.on('message', function (msg) {
      console.log('inside consumer')
      console.log(msg)
    })

    consumer.on('error', function (err) {
      console.log('Error:', err)
    })

    consumer.on('offsetOutOfRange', function (err) {
      console.log('offsetOutOfRange:', err)
    })
  }

  /**
   *
   *
   * @static
   * @param {string} topic
   * @param {*} messages
   * @memberof Notification
   */
  public static produceEvent(topic: string, messages: any) {
    console.log(Env.get('KAFKA_SERVER'))
    const client = new KafkaClient(Env.get('KAFKA_SERVER'))
    const producer = new Producer(client)

    const payloads: ProduceRequest[] = [
      {
        topic: topic,
        messages: messages,
      },
    ]

    producer.on('ready', function () {
      const pushStatus = producer.send(payloads, (err, data) => {
        if (err) {
          console.log('[kafka-producer -> ' + topic + ']: broker failed to update')
        } else {
          console.log('[kafka-producer -> ' + topic + ']: broker updated successfully')
        }
      })
    })

    producer.on('error', function (err) {
      console.log('Producer is in error state')
      console.log(err)
    })
  }
}
