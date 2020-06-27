firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var userNumber = user.phoneNumber.toString();

        var upnumber = userNumber.slice(3);
        console.log(upnumber);
        fetch("usersData.json").then(res => res.json()).then(data => {
            data.forEach(ele => {
                if (ele.contact == upnumber) {
                    console.log(ele.name)
                    let html = `  <div class="user-info">
                  <p id="name">${ele.name}</p>
                  <p id="username">${ele.userName}</p>
                  <p id="contact">${ele.contact}</p>
                  <p id="email">${ele.email}</p>
              </div>`;
                    $(".main_content").append(html);
                }
            })
        })
    } else {
        console.log("no user");
    }
});

document.querySelector(".logout").addEventListener("click", function() {

    firebase.auth().signOut()
        .then(function() {
            alert("user has logged out");
            window.location.href = "lgin.html";
        }).catch(function(error) {
            alert("unable to signout");
        });
})
