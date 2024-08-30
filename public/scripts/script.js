// 

const background = document.getElementById("image");

const monitorRect = document.getElementById("monitor-vector");
monitorRect.addEventListener("mouseover", function() {
    background.src = 'assets/backgroundmonitor.png';
});

monitorRect.addEventListener("mouseout", function() {
    background.src = 'assets/background.gif';
});

const typewriterRect = document.getElementById("typewriter-vector");
typewriterRect.addEventListener("mouseover", function() {
    background.src = 'assets/backgroundtypewriter.png';
});

typewriterRect.addEventListener("mouseout", function() {
    background.src = 'assets/background.gif';
});

const cityRect = document.getElementById("city");
cityRect.addEventListener("mouseover", function() {
    background.src = 'assets/backgroundcity.png';
});

cityRect.addEventListener("mouseout", function() {
    background.src = 'assets/background.gif';
});

const cvRect = document.getElementById("cv-vector");
cvRect.addEventListener("mouseover", function() {
    background.src = 'assets/backgroundabout.png';
});

cvRect.addEventListener("mouseout", function() {
    background.src = 'assets/background.gif';
});