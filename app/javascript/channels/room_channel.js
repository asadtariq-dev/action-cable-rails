import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log('Connected to Room Channel')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log('Disconnected from Room Channel')
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  }
});
