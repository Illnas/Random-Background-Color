
let background = document.getElementById("backgrounds");
let button = document.getElementById("color-button");

button.onclick = () => {
    function Randomness () {
        let rng = Math.floor(Math.random() * 256);
        return rng;
    }
    
    let randomColour = `rgb( ${Randomness()}, ${Randomness()}, ${Randomness()})`;
    background.style.backgroundColor = randomColour; 
    /* Leaving here bcs I used this to check values in Randomness func  
       
       console.log(randomColour);
    */
    
}

