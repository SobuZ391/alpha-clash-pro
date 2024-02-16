// function play(){
//     // step-1 hide the home screen .to hide the screen add the class hidden to the home section
//     const homeSection =document.getElementById('home-screen')  ;
//     homeSection.classList.add('hidden')
    

//     // show the playground
//     const playGroundSection= document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }


function handleKeyboardUpEvent(event){
    const playerPressed = event.key;
    
    console.log('playerPressed',playerPressed)

    //stop the game if pressed 'Esc'
    if(playerPressed ==='Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement =document.getElementById('current-alphabet');
    const currentAlphabet =currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();
    
    //check right key or wrong key pressed
    if (playerPressed === expectedAlphabet){
        console.log('you get a point!');
        const currentScore = getElementValueById('current-score');
        const updateScore = currentScore + 1;

        setTextElementValueById ('current-score',updateScore)
        
        //----------------------------------------------------
        //update score :
        //1. get the current score
        //     const currentScoreElement = document.getElementById('current-score');
        //    const currentScoretext =currentScoreElement.innerText
        //     console.log('current score',currentScoretext)
        //     const currentScore =parseInt(currentScoretext);
        //     //2.increase the score by 1
        //     //3.show the updated score
        //     currentScoreElement.innerText =newScore;
        
        //     //start a new round
        
        continueGame();
        removeBackgroundColorById(expectedAlphabet)
    }
    else{
        console.log('you missed . you lost a life');

        const currentLife =getElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById ('current-life',updateLife)

        if(updateLife === 0){
           gameOver()
        }



       //-----------------------------------------------
        //step-1:get the current life number
    //     const currentLifeElement= document.getElementById('current-life');
    //     const currentLifeText = currentLifeElement.innerText;
    //     const currentLife =parseInt(currentLifeText);

    //     //step-2 :reduce the life count 
    //     const newLife = currentLife -1

    //     // step-3 display the updated life count
    //   currentLifeElement.innerText = newLife;
    }
    
}
//captured keyboard keypress
document.addEventListener('keyup',handleKeyboardUpEvent);


function continueGame() {
    //step 1 : generate a random alphabet
    //
    const alphabet =getARandomAlphabet();
    // console.log('your random alphabet',alphabet)
    //set randomly generaed alphabet
    const curretAlphabetElement= document.getElementById('current-alphabet');
    curretAlphabetElement.innerText =alphabet;
    //set background color
    setBackgroundColorById(alphabet) 
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    addElementById('play-ground');

//reset score and life
 setTextElementValueById('current-life',5)
 setTextElementValueById('current-score',0)
 
 
    continueGame()
}
function gameOver (){
    hideElementById('play-ground')
    
    addElementById('final-score')

    //update final score
    //get the final score
 const lastScore = getElementValueById('current-score')
 console.log(lastScore)
 setTextElementValueById('last-score',lastScore )
 
 //clear the last marked alphabet highlight

    const currentAlphabet =  getElementTextById('current-alphabet')
    
    removeBackgroundColorById(currentAlphabet);
    

}
 
