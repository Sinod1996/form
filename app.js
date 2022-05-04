const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error")

form.addEventListener('submit', (e) => {
    let messages = [];
    if(email.value === "" || email.value === null){
        messages.push("Email is required")
    }

    if(password.value.length <= 8) {
        messages.push("Password must be longer than 8 characters")
    }

    if(password.value.length >= 20) {
        messages.push("Password must be less than 20")
    }

    if(messages.length > 0){
        errorElement.innerHTML = messages.join(", ")
    }
    e.preventDefault();
})