$(document).ready(function() {
    render();
});

var found = false;

function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "captcha-container"
    );
    recaptchaVerifier.render();
}

// var recaptchaResponse = grecaptcha.getResponse(window.recaptchaVerifier);

var btn = document.querySelector("#send-otp");
btn.addEventListener("click", function(e) {
    e.preventDefault();
    let userInput = document.getElementById("number").value;

    if (userInput == "") {
        alert("please enter mobile number");
    } else {
        fetch("usersData.json")
            .then((res) => res.json())
            .then((data) => {
                data.forEach((ele) => {
                    console.log(ele);
                    if (ele.contact == userInput) {
                        sendOtp();
                        $("small").css("display", "none");
                    } else {
                        $("small").text("no user found");
                    }
                });
            });
    }
});

function sendOtp() {
    var phoneNumber = document.getElementById("number").value;
    var mnumber = "+91" + phoneNumber;

    var appVerifier = window.recaptchaVerifier;
    firebase
        .auth()
        .signInWithPhoneNumber(mnumber, appVerifier)
        .then(function(confirmationResult) {
            window.confirmationResult = confirmationResult;

            alert("otp sent successfully");
        })
        .catch(function(error) {
            console.log(error.message);
        });
}

document.querySelector("#verify-user").addEventListener("click", function(e) {
    e.preventDefault();
    let userInput = document.getElementById("number").value;

    if (userInput == "") {
        alert("please enter mobile number");
    } else {
        var code = document.querySelector("#otp").value;
        confirmationResult
            .confirm(code)
            .then(function(result) {
                // User signed in successfully.
                var user = result.user;
                console.log(user);
                window.location.href = "userprofile.html";
                // ...
            })
            .catch(function(error) {
                // User couldn't sign in (bad verification code?)
                // ...
                alert("please enter a correct otp");
            });
    }
});

var verify = document.querySelector("#verify");
