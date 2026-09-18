const promise1 = new Promise((resolve, reject) => {
    let success = 0;

    if (success) {
        resolve({
            id: 1,
            name: "Jatin"
        });
    } else {
        reject("Error: User not found");
    }
});

const promise2 = new Promise((resolve, reject) => {
    let success = 0;

    if (success) {
        resolve({
            order: "placed",
            id: 101,
            location:"New Delhi"
        });
    } else {
        reject("Error: Order not placed");
    }
});

// Promise.all([promise1, promise2])
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Promise.race([promise1, promise2])
//    .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Promise.allSettled([promise1, promise2])
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

Promise.any([promise1, promise2])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
