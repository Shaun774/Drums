
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",
        function (event) {
            var buttonInnerHtml = this.innerHTML;
            switch (buttonInnerHtml) {
                case "w":
                    var carsh = new Audio("./sounds/crash.mp3");
                    carsh.play();
                    break;
                case "a":
                    var kick = new Audio("./sounds/kick-bass.mp3");
                    kick.play();
                    break;
                case "s":
                    var snare = new Audio("./sounds/snare.mp3");
                    snare.play();
                    break;
                case "d":
                    var tom1 = new Audio("./sounds/tom-1.mp3");
                    tom1.play();
                    break;
                case "j":
                    var tom2 = new Audio("./sounds/tom-2.mp3");
                    tom2.play();
                    break;
                case "k":
                    var tom3 = new Audio("./sounds/tom-3.mp3");
                    tom3.play();
                    break;
                case "l":
                    var tom4 = new Audio("./sounds/tom-4.mp3");
                    tom4.play();
                    break;


                default: console.log(buttonInnerHtml);
                    break;
            }
            animation(buttonInnerHtml);
        })
}

    document.addEventListener("keydown", function (event) {
        var key = event.key;
        switch (key) {
            case "w":
                var carsh = new Audio("./sounds/crash.mp3");
                carsh.play();
                break;
            case "a":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;
            case "s":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            case "d":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            case "l":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;


            default: console.log(buttonInnerHtml);
                break;
        }
        animation(key);
    }
    )



function animation(key){
    var animate = document.querySelector("."+key);
    animate.classList.add("pressed");
    setTimeout(function(){
        animate.classList.remove("pressed");
    }, 200);
}

// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();