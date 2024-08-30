// 

const background = document.getElementById("image");

// City Spots
const cityRect = document.getElementById("city");
const cityOutline = document.getElementById("cityoutline");
cityRect.addEventListener("mouseover", function() {
    cityOutline.style.visibility = "visible";
});

cityRect.addEventListener("mouseout", function() {
    cityOutline.style.visibility = "hidden";
});

// Projects

const monitorRect = document.getElementById("monitor-vector");
monitorRect.addEventListener("mouseover", function() {
    background.src = 'assets/backgroundmonitor.png';
});

monitorRect.addEventListener("mouseout", function() {
    background.src = 'assets/background.gif';
});

// Blog

const typewriterRect = document.getElementById("typewriter-vector");
typewriterRect.addEventListener("mouseover", function() {
    background.src = 'assets/backgroundtypewriter.png';
});

typewriterRect.addEventListener("mouseout", function() {
    background.src = 'assets/background.gif';
});

// About 

const cvRect = document.getElementById("cv-vector");
cvRect.addEventListener("mouseover", function() {
    background.src = 'assets/backgroundabout.png';
});

cvRect.addEventListener("mouseout", function() {
    background.src = 'assets/background.gif';
});