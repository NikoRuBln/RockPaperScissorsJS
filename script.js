function getComputerChoice(){
    let ComputerChoice = Math.floor(Math.random() * 3);

    if (ComputerChoice == 0)
    {
        ComputerChoice = "rock";
       
    }

    if (ComputerChoice == 1)
    {
        ComputerChoice = "paper";
       
    }

    if (ComputerChoice == 2)
    {
        ComputerChoice = "scissors";
        
    }

    return ComputerChoice;
}

function playRound(userInput, ComputerChoice){
    if (userInput == "rock" && ComputerChoice == "scissors") //following three are wins
    {
        return 1;
    }

    if (userInput == "paper" && ComputerChoice == "rock")
    {
        return 1;
    }

    if (userInput == "scissors" && ComputerChoice == "paper")
    {
        return 1;
    }

    if (userInput == ComputerChoice) // draw
    {
        return 2;
    }
    else // loss
    {
        return 0;
    }
}

function getUserChoice(){ 
   
    let userInput = prompt("Please enter your choice: rock, paper or scissors?");
    
    userInput = userInput.toLowerCase();
    

    while ((userInput != "rock") && (userInput != "paper") && (userInput != "scissors")) 
    {
    console.log("Wrong Input!");
    userInput = prompt("Please enter your choice: rock, paper or scissors?");
    
    userInput = userInput.toLowerCase(); //String is transformed to lowercase to prevent errors
    
    }
    
    return userInput;

}

///////////////////////// main programm //////////////////////////


let computerScore = 0;
let userScore = 0;
let rounds = 0;
let draws = 0;

for (let i = 0 ; i <= 4 ; i++)
{
    rounds ++;
    console.log("-----------------------------------------------------------");
    console.log("User Score:"+userScore+"  Computer Score:"+computerScore+" Draws:"+draws);
    console.log("Nr. of rounds:"+rounds);
    const ComputerChoice = getComputerChoice();
    const userInput = getUserChoice();

    playRound (userInput, ComputerChoice);

    console.log("Computer choice:" + ComputerChoice);
    console.log("User choice:" + userInput);

    if (playRound(userInput, ComputerChoice) == 1) // win
    {
        userScore ++;
        prompt("\nRound Result:\nComputer Choice: "+ComputerChoice+"\nUser Choice: "+userInput+"\nCongratulations! You won!");
    }

    if (playRound(userInput, ComputerChoice) == 0) // loss
    {
        computerScore ++;
        prompt("\nRound Result:\nComputer Choice: "+ComputerChoice+"\nUser Choice: "+userInput+"\nYou lost!");
    }

    if (playRound(userInput, ComputerChoice) == 2) // draw
    {
        i --;
        draws ++;
        prompt("\nRound Result:\nComputer Choice: "+ComputerChoice+"\nUser Choice: "+userInput+"\nIt`s a draw!");
    }

    
    console.clear();
}

if (userScore > computerScore)
{
    console.log("Congratulations! You won the game!\n User Score:"+userScore+" Computer Score:"+computerScore);
}
else
{
    console.log("Sorry! The machine wins!\n User Score:"+userScore+" Computer Score:"+computerScore);
}