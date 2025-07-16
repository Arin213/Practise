/*
    Let's Practise:
    Create a toggle button that changes the screen to dark-mode
    whenc clicked & light-mode and clicked again.

    toggle -> changing state when trigger!
*/ 
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
// pass the variable to store the mode 
let currentMode = "light";

// addEventListner
modeBtn.addEventListener("click", () => {
    if (currentMode === "light") {
        currentMode = "dark";
        // change backgroundcolor for button to dark:
        // document.querySelector("body").style.backgroundColor = "black";
        
        // instead we can pass the class
        body.classList.add("dark");
        body.classList.remove("light"); // remove the class that is present in current mode

    } else {
        currentMode = "light";
        // change to light or white
        // document.querySelector("body").style.backgroundColor = "white";

        body.classList.add("light");
        body.classList.remove("dark"); //reove dark class currently present.
    }

    console.log(currentMode);
});