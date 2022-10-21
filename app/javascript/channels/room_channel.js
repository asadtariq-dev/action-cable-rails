import consumer from "./consumer";

document.addEventListener("turbolinks:load", () => {
  const element = document.getElementById("room_id");
  const room_id = element.getAttribute("data-room-id");

  consumer.subscriptions.create(
    {
      channel: "RoomChannel",
      room_id: room_id,
    },
    {
      connected() {
        console.log("Connected to Room Channel", room_id);
      },

      disconnected() {
        console.log("Disconnected from Room Channel");
      },

      received(data) {
        console.log(data);
      },
    }
  );
});
