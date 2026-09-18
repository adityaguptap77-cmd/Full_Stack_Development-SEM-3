function getUser() {
    return new Promise((resolve, reject) => {
        let user = 0;
        if (!user) {
            reject("Error: User not found");
        } else {
            resolve({
                name: "Jatin",
                role: "ML Engineer"
            });
        }
    });
}
async function fetchUser() {
    try {
        const response = await getUser();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

fetchUser();
console.log("Hello");



