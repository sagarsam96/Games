const select = document.querySelector("#games");
const selectedOption= document.getElementById("selectedOption");
const input= document.getElementById("inputs");
const inputOne = document.getElementById("nGInput");
const inputTwo = document.getElementById("cTInput");
const inputThree = document.getElementById("rPSInput");
const result = document.getElementById("result");
//win/lose/draw
let won=0, lose=0, draw=0;

const resultCounter = ()=>{
    
    result.innerText=`Results: Wins: ${won} || Loses: ${lose} || Draws: ${draw}`;
}
resultCounter();

select.addEventListener("change", (e)=>{
    e.preventDefault();
    const nameOfGame= [].filter.call(select.options,option =>option.selected).map( x=>x.text);
    
    showGameName(nameOfGame);
    showGameInputs(nameOfGame);

})

const showGameName=(nameOfGame)=>{
    if(nameOfGame[0]!=="")
    {
        selectedOption.style.display="block";
        selectedOption.innerText= nameOfGame;
    }else{
        selectedOption.style.display="none";
    }
}

//need something better to replace this function
const showGameInputs=(nameOfGame)=>{
  
   if(nameOfGame[0]!=="")
    { 
        input.style.display="block";
        switch (select.selectedIndex){
            case 1: 
            inputOne.style.display="block";
            inputTwo.style.display="none";
            inputThree.style.display="none";
            break;

            case 2: 
            inputOne.style.display="none";
            inputTwo.style.display="block";
            inputThree.style.display="none";
            break;

            case 3: 
            inputOne.style.display="none";
            inputTwo.style.display="none";
            inputThree.style.display="block";
            break;

                    
        }

    }else{
        inputOne.style.display="none";
        inputTwo.style.display="none";
        inputThree.style.display="none";
                
    }
}


//Real Game

//Number Guessing Game
const gameOne_Input = document.getElementById("input");
const gameOne_button = document.getElementById("submit");

const resultOne = ~~(Math.random()*10);

gameOne_button.addEventListener("click",()=>{
    if(gameOne_Input.value && gameOne_Input.value.length<2)
    {   
        console.log(resultOne);

       if(resultOne==gameOne_Input.value){
           alert("You won!!");
           won++;
       }else{
           resultOne>gameOne_Input.value?
           alert("bigger number"):
           alert("smaller number")
            }
        
        gameOne_Input.value="";   
    }
    resultCounter();

})

//gameTwo:
const head = document.getElementById("head");
const tail = document.getElementById("tail");

head.addEventListener("click", ()=>{
    let resultTwo = ~~(Math.random()>=0.5);
    console.log(resultTwo);
    if(resultTwo==1){
        alert(`It's head, you won`);
        won++;
    }else{
        alert(`It's tail, you lose`);
        lose++;
    }
    resultCounter();

})

tail.addEventListener("click", ()=>{
    let resultTwo = ~~(Math.random()>=0.5);
    console.log(resultTwo);
    if(resultTwo==0){
        alert(`It's tail, you won`);
        won++;
   }else{
    alert(`It's head, you lose`);
    lose++;
    }
    resultCounter();
})

//gameThree:

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");


rock.addEventListener("click", ()=>{
    let resultThree = ~~(Math.random()*3);
    console.log(resultThree);
    switch(resultThree){
        case 1: alert(`Rock, Draw`); draw++; break;
        case 2: alert(`Paper, You Lose`); lose++; break;
        case 3: alert(`Scissor, You Won`); won++; break;
    }
    resultCounter();
})

paper.addEventListener("click", ()=>{
    let resultThree = ~~(Math.random()*3);
    console.log(resultThree);
    switch(resultThree){
        case 1: alert(`Rock, You Won`); won++; break;
        case 2: alert(`Paper, Draw`); draw++; break;
        case 3: alert(`Scissor, You lose`); lose++; break;
    }
    resultCounter();
})

scissor.addEventListener("click", ()=>{
    let resultThree = ~~(Math.random()*3);
    console.log(resultThree);
    switch(resultThree){
        case 1: alert(`Rock, Lose`); lose++; break;
        case 2: alert(`Paper, You Won`); won++; break;
        case 3: alert(`Scissor, Draw`); draw++; break;
    }
    resultCounter();
})






