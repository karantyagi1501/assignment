if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("sw.js")
            .then((res) => {
                console.log("registred");
            })
            .catch((err) => {
                this.console.log(err);
            });
    });
}
