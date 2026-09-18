function getUserData(callback){
    setTimeout(()=>{
        console.log("Fetching user data...");
        const userData = {name: "John", age: 30};
        callback(userData);
    }, 2000);   
}
getUserData(userData=>{
    console.log("User data received:", userData);
}); 

function getProfileData(userId,callback){   
    setTimeout(()=>{
        console.log("Fetching profile data for user:", userId);
        const profileData = {userId: "5656", bio: "Software Developer"};
        callback(null,profileData);
    }, 2000);
}   
function getPosts(username,callback){
    setTimeout(()=>{
        console.log("Fetching posts for user:", username);
        const posts = ["Post 1", "Post 2", "Post 3"];
        callback(null,posts);
    }, 2000)};
    getProfileData("5656",(err,profileData)=>{
        if(err){
            console.log("Error fetching profile data:", err);
        } else {
            console.log("Profile data received:", profileData);
        }
    });
    getPosts("John",(err,posts)=>{
        if(err){
            console.log("Error fetching posts:", err);  
        } else {
            console.log("Posts received:", posts);
        }
    });

//solution to callback hell using async/await
async function fetchUserData(){
    try{
        const userData = await getUserDataPromise();
        console.log("User data received:", userData);
    } catch(err){
        console.log("Error fetching user data:", err);
    }
}