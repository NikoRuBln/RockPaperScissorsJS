function getComputerChoice(){
    let ComputerChoice = Math.floor(Math.random() * 3);

    if (ComputerChoice == 0)
    {
        ComputerChoice = "Rock";
        console.log(ComputerChoice);
    }

    if (ComputerChoice == 1)
    {
        ComputerChoice = "Paper";
        console.log(ComputerChoice);
    }

    if (ComputerChoice == 2)
    {
        ComputerChoice = "Scissors";
        console.log(ComputerChoice);
    }
}

getComputerChoice();