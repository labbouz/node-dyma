let index = 0;

setTimeout(() => {
    const timerId = setInterval(() => {
        index++;
        const div = document.createElement("div");

        div.innerText = "Hello " + index + " !";

        document.querySelector("#app").append(div);
    }, 1000);

    setTimeout(() => clearInterval(timerId), 5000);
}, 2000);
