

//for pressng using mouse
let button = document.querySelectorAll("button");
for(let i =0 ;i<button.length;i++) {

    button[i].addEventListener("click", function()
    {  
        let buttontext = this.innerHTML;

       makeSound(buttontext);
       buttonAnimation(buttontext);

});
}

//for preesing keyBoard button 
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


//for making a sound 
function makeSound(key){


    switch(key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
          break;
        case "a":  
          var tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
          break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
             break;
                    
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
             break;
        case "l":
            var kickbass = new Audio('sounds/kick-bass.mp3');
            kickbass.play();
         break;
                                              

        default:
          console.log("you have clicked somewhere else ");
      }
  
}


function buttonAnimation(currentbutton){
     var activeButton = document.querySelector("." + currentbutton);
     activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    } , 100);

}
// have to acees these fumction before initialize the function