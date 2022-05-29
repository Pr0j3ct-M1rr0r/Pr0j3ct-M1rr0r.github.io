function start() {
    console.log("hello, world!");
    const element = document.getElementById("startButton");
    element.remove();
    const videoCanvas = document.createElement("canvas");
    videoCanvas.width = "500";
    videoCanvas.height = "600";
    videoCanvas.style = "background: url('https://cdna.lystit.com/520/650/n/photos/lvr/b46559eb/gucci-Black-Logo-Print-Cotton-Jersey-T-shirt.jpeg')";

    const div = document.getElementById("banner");
    div.appendChild(videoCanvas);
}
