import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

const ORDER_PLACED = "orderPlaced";

emitter.on(ORDER_PLACED, ({ name, price }) => {
  console.log(`Order "${name}" placed successfully. Price: ₹${price.toLocaleString("en-IN")}`);
});

emitter.on(ORDER_PLACED, ({ name }) => {
  console.log(`Confirmation email sent for "${name}".`);
});

emitter.on(ORDER_PLACED, ({ name }) => {
  console.log(`Inventory updated for "${name}".`);
});

const order = {
  name: "Samsung S26 Ultra",
  price: 150000,
};

emitter.emit(ORDER_PLACED, order);