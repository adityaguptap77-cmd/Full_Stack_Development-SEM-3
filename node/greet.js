function greet(username,callback){
    console.log("welcome");
    if(typeof callback === "function"){
        callback(username);
    }
}
    greet("John",username=>{
        console.log("Hello",username);
    });