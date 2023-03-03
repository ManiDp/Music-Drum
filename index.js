var drums= document.querySelectorAll(".drum");

for(var i =0;i<drums.length ; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function process(){
    
    var song = this.innerHTML;
    sound(song);
    Animationkey(song);
})

}

document.addEventListener("keydown",function(event){
    sound(event.key);
    Animationkey(event.key);
})


function sound(signal){
    switch (signal) {
        case 'w':
            var music = new Audio('sounds/tom-1.mp3');
            music.play();
        break; 

        case 'a':
            var music = new Audio('sounds/tom-2.mp3');
            music.play();
        break;

        case 's':
            var music = new Audio('sounds/tom-3.mp3');
            music.play();
        break;
        
        case 'd':
            var music = new Audio('sounds/tom-4.mp3');
            music.play();
        break;

        case 'j':
            var music = new Audio('sounds/snare.mp3');
            music.play();
        break;

        case 'k':
            var music = new Audio('sounds/kick-bass.mp3');
            music.play();
        break;

        case 'l':
            var music = new Audio('sounds/crash.mp3');
            music.play();
        break;

        default: console.assertlog(song);

    }
}

function Animationkey(animation_drum_name){

    var drum_key = document.querySelector("."+animation_drum_name);

    drum_key.classList.add('pressed');
    setTimeout(function(){
        drum_key.classList.remove('pressed');
    },100);
}