let state = 0;

function Change() {
    var img = document.getElementById("bulb");
    if(state == 0) {
        state = 1;
        img.src = "./assets/pic_bulbon.gif";
    }
    else if(state == 1) {
        state = 0;
        img.src = "./assets/pic_bulboff.gif";
    }
    else {
        console.log("Error on change function");
    }
}
