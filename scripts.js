// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortMissionButton = document.getElementById("missionAbort");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    let rocket = document.getElementById("rocket");
    let rocketXposition = 0;
    rocket.style.bottom = "-250px";

    takeOffButton.addEventListener("click", function(event) {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
            rocket.style.bottom = "-150px";
        }
    });

    landButton.addEventListener("click", function(event) {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocket.style.bottom = "-250px";
    });

    abortMissionButton.addEventListener("click", function(event) {
        if (confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocket.style.bottom = "-250px";
            rocket.style.left = "0px";
            rocketXposition = 0;
        }
    });

    leftButton.addEventListener("click", function(event) {
        if (flightStatus.innerHTML === "Shuttle in flight." && rocketXposition > -250) {
            rocketXposition -= 10;
            rocket.style.left = rocketXposition + "px";
        }
    });

    rightButton.addEventListener("click", function(event) {
        if (flightStatus.innerHTML === "Shuttle in flight." && rocketXposition < 250) {
            rocketXposition += 10;
            rocket.style.left = rocketXposition + "px";
        }
    });

    upButton.addEventListener("click", function(event) {
        if (flightStatus.innerHTML === "Shuttle in flight." && Number(shuttleHeight.innerHTML) < 25000) {
            let height = (Number(shuttleHeight.innerHTML) / 100) - 250;
            height += 10;
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 1000;
            rocket.style.bottom = height + "px";
        }
    });

    downButton.addEventListener("click", function(event) {
        if (flightStatus.innerHTML === "Shuttle in flight." && Number(shuttleHeight.innerHTML) > 1000) {
            let height = (Number(shuttleHeight.innerHTML) / 100) - 250;
            height -= 10;
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 1000;
            rocket.style.bottom = height + "px";
        }
    });
});