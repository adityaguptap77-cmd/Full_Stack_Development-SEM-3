//synchronous
console.log("Start")
for(let i = 0; i < 10; i++) {
    console.log(i)
}
console.log("End");
//asynchronous
console.log("async-Start")
setTimeout(() => {
    console.log("This is a message from setTimeout");
}, 2000);
console.log("async-End");