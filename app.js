let state = 0;

function Change() {
    var img = document.getElementById("bulb");
    if(state == 0) {
        state = 1;
        img.src = "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg";
    }
    else if(state == 1) {
        state = 0;
        img.src = "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg";
    }
    else {
        console.log("Error on change function");
    }
}
