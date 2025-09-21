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
const monitorOutline = document.getElementById("monitoroutline");
monitorRect.addEventListener("mouseover", function() {
    monitorOutline.style.visibility = "visible";
});

monitorRect.addEventListener("mouseout", function() {
    monitorOutline.style.visibility = "hidden";
});

// Blog
const typewriterRect = document.getElementById("typewriter-vector");
const typewriterOutline = document.getElementById("typewriteroutline");
typewriterRect.addEventListener("mouseover", function() {
    typewriterOutline.style.visibility = "visible";
});

typewriterRect.addEventListener("mouseout", function() {
    typewriterOutline.style.visibility = "hidden";
});

// About 
const cvRect = document.getElementById("cv-vector");
const aboutOutline = document.getElementById("aboutoutline");
cvRect.addEventListener("mouseover", function() {
    aboutOutline.style.visibility = "visible";
});

cvRect.addEventListener("mouseout", function() {
    aboutOutline.style.visibility = "hidden";
});
