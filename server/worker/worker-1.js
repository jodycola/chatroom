var amqp = require('amqplib/callback_api');
const CONN_URL = 'amqps://ufeiungf:AgBTnYos-o9BCd4ObbBOTXo-ad00mgEk@shrimp.rmq.cloudamqp.com/ufeiungf';
amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume('user-messages', function (msg) {
      console.log('.....');
      setTimeout(function(){
        console.log("Message:", msg.content.toString());
      },1000);
      },{ noAck: false }
    );
  });
});