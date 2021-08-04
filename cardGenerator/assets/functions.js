function generate(params) {
    let myOwnText = document.getElementById("name");
    let myText = document.getElementById('profileName');
    myText.innerHTML = myOwnText.value // Update the text with the new value

    var theInput = document.getElementById("color");
    var theColor = theInput.value;
    var cardBG = document.getElementById("card");
    cardBG.style.background = theColor; // Update background color for the card

    var img = document.getElementById("output");
    if (document.getElementById("profilePic").files.length !== 0) { 
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}

var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};