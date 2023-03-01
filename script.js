const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (
      userInput === 'rock' ||
      userInput === 'paper' ||
      userInput === 'scissors'
    ) {
      return userInput;
    } else {
      console.log("Error! Type rock, paper, or scissors.");
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "The game is a tie!";
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return "You suck";
      } else {
        return "Nice, you won!";
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return "You suck";
      } else {
        return "Nice, you won!";
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "You suck";
      } else {
        return "Nice, you won!";
      }
    }
  };

  const playGame = (choice) => {
    const userChoice = getUserChoice(choice);
    const computerChoice = getComputerChoice();
    document.getElementById(playerchoice);
    //console.log("You threw: " + userChoice);
    //console.log("The computer threw:" + computerChoice);
    //console.log(determineWinner(userChoice, computerChoice));
    document.getElementById('rock');
    document.getElementById('paper');
    document.getElementById('scissors');
  };

