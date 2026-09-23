import EventEmitter from "node:events";

const emitter = new EventEmitter();


emitter.on("signup", (name, email) => {

    console.log(`User ${name} signed up successfully`);

    emitter.emit("welcome", name);

  emitter.emit("saveToDatabase", name, email);

    emitter.emit("sendEmail", name, email);

});

emitter.on("welcome", (name) => {

    console.log(`Welcome ${name}! We are happy to have you.`);

});

emitter.on("saveToDatabase", (name, email) => {

    console.log(`User information saved in database`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);

});

emitter.on("sendEmail", (name, email) => {

    console.log(`Welcome email sent to ${email}`);

});

emitter.emit("signup", "user", "user@gmail.com");