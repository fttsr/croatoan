var myImage = document.querySelector("img");

myImage.onclick = () => {
    var mySrc = myImage.getAttribute("src");
    mySrc === "images/croatoan.jpeg" ?
        myImage.setAttribute("src", "images/croatoan2.jpg") :
        myImage.setAttribute("src", "images/croatoan.jpeg");
}