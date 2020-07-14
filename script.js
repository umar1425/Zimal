var pics = [
    "Assets/IMG_2549.JPG",
    "Assets/IMG_2575.JPG",
    "Assets/IMG_2583.JPG",
    "Assets/IMG_2591.JPG",
    "Assets/IMG_2631.JPG",
    "Assets/IMG_2661.JPG",
    "Assets/IMG_2900.JPG",
    "Assets/IMG_2916.JPG",
    "Assets/IMG_2920.JPG",
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function() {
    if (counter === 6){
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1;
});