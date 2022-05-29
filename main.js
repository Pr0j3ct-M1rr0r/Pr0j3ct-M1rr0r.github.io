function start() {
    console.log("hello, world!");
    const element = document.getElementById("startButton");
    element.remove();
    const videoCanvas = document.createElement("canvas");
    videoCanvas.width = "640";
    videoCanvas.height = "480";
    videoCanvas.style = "background: url('https://www.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg')";

    const div = document.getElementById("banner");
    div.appendChild(videoCanvas);
}
