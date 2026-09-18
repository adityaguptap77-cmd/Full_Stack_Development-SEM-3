//Solution to callback hell using promises
//1.Pending
//2.Fulfilled
//3.Rejected
const promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve({
            username:"John",
            age:"30",
        });
        console.log("Promise resolved");
    } else {
        reject("Promise rejected");
    }}
);
console.log(promise1);

promise1.then(userData=>{
    console.log("User data received:", userData);
}).catch(err=>{
    console.log("Error fetching user data:", err);
});

//Make a weather application using fetch api and promises