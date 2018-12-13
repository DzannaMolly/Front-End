// function startupWebpage() {
//     var textContainer = document.createElement("div");
//     var aboutText = document.createElement("p");
//     aboutText.innerHTML = "I love cats";
//     document.getElementsByTagName("body")[0].appendChild(aboutText);

//     aboutText.addEventListener("mouseenter", function(event){
//         event.target.style.color = "red";
//     });

//     aboutText.addEventListener("mouseout", function(event){
//         event.target.style.color = "black";
//     });
// }

// startupWebpage();

function startupWebpage() {
    var mainContainer = document.getElementById("main-container");
    mainContainer.style.display = "flex";
    // mainContainer.style.flexDirection = "column";

    var firstName = document.createElement("input");
    mainContainer.appendChild(firstName);
    firstName.placeholder = "First Name";
    firstName.style.marginRight = "20px";

    var lastName = document.createElement("input");
    mainContainer.appendChild(lastName);
    lastName.placeholder = "Last Name";
    lastName.style.marginRight = "20px";

    var email = document.createElement("input");
    mainContainer.appendChild(email);

    email.placeholder = "Email";
    email.style.marginRight = "20px";

    var password = document.createElement("input");
    password.type = "password";
    mainContainer.appendChild(password);
    password.placeholder = "Password";

    var button = document.createElement("button");
    mainContainer.appendChild(button);
    button.addEventListener("click", function (event) {
        var user = {
            firstname: firstName.value,
            lastname: lastName.value,
            email: email.value,
            password: password.value
        }

        if (user.password.length < 8) {
            console.log("invalid password");
        } else { console.log(user); }

        if (!validateEmail(user.email)) {
            console.log("invalid email");
        } else console.log(user.email);
    });


    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}

startupWebpage();