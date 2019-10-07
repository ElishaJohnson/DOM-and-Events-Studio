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
    let groundLevel = -78;
    rocket.style.bottom = groundLevel + "%";

    takeOffButton.addEventListener("click", function(event) {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
            rocket.style.bottom = ((Number(shuttleHeight.innerHTML) / 2500) + groundLevel) + "%";
        }
    });

    landButton.addEventListener("click", function(event) {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocket.style.bottom = groundLevel + "%";
    });

    abortMissionButton.addEventListener("click", function(event) {
        if (confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocket.style.bottom = groundLevel + "%";
            rocket.style.left = "0px";
            rocketXposition = 0;
        }
    });

    leftButton.addEventListener("click", function(event) {
        if (flightStatus.innerHTML === "Shuttle in flight." && rocketXposition > -44) {
            rocketXposition -= 3.75;
            rocket.style.left = rocketXposition + "%";
        }
    });

    rightButton.addEventListener("click", function(event) {
        if (flightStatus.innerHTML === "Shuttle in flight." && rocketXposition < 44) {
            rocketXposition += 3.75;
            rocket.style.left = rocketXposition + "%";
        }
    });

    upButton.addEventListener("click", function(event) {
        if (flightStatus.innerHTML === "Shuttle in flight." && Number(shuttleHeight.innerHTML) < 200000) {
            let height = (Number(shuttleHeight.innerHTML) / 2500) + groundLevel;
            height += 4;
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
            rocket.style.bottom = height + "%";
        }
    });

    downButton.addEventListener("click", function(event) {
        if (flightStatus.innerHTML === "Shuttle in flight." && Number(shuttleHeight.innerHTML) > 10000) {
            let height = (Number(shuttleHeight.innerHTML) / 2500) + groundLevel;
            height -= 4;
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
            rocket.style.bottom = height + "%";
        }
    });
});