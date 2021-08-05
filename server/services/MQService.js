const amqp = require('amqplib/callback_api');
const bufferFrom = require('buffer-from')
const CONN_URL = 'amqps://ufeiungf:AgBTnYos-o9BCd4ObbBOTXo-ad00mgEk@shrimp.rmq.cloudamqp.com/ufeiungf';

let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
    conn.createChannel(function (err, channel) {
        ch = channel;
    });
});

const publishToQueue = async (queueName, data) => {
    ch.sendToQueue(queueName, Buffer.from(data), {persistent: true});
}

process.on('exit', (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
});

module.exports = { publishToQueue };