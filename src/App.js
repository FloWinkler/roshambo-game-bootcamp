import React from 'react';
import * as GameStyles from './GameStyles';

class App extends React.Component {
  state = {
    userChoice: '',
    result: '',
    computersChoice: '',
    playClicked: false,
  };

  handleIconClick = (choice) => {
    const { playClicked } = this.state;
    if (!playClicked) {
      this.setState({ userChoice: choice });
    }
  };

  handlePlayClick = () => {
    const { userChoice, playClicked } = this.state;

    if (!playClicked && userChoice) {
      if (userChoice === 'dice') {
        const randomChoice = this.getRandomChoice();
        this.setState({ userChoice: randomChoice });
      }

      const computersChoice = this.getComputerChoice();
      const result = this.determineWinner(userChoice, computersChoice);
      this.setState({ result, computersChoice, playClicked: true });
    } else {
      this.setState({ playClicked: false });
    }
  };

  handleDiceClick = () => {
    const { playClicked } = this.state;
    if (!playClicked) {
      this.setState({ userChoice: 'dice' });
    }
  };

  getRandomChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  };

  determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'dice') {
      return 'Dice rolled: ' + computerChoice;
    } else if (userChoice === computerChoice) {
      return 'The game is a tie!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    } else {
      return 'Invalid choice';
    }
  };

  render() {
    const { userChoice, result, computersChoice, playClicked } = this.state;

    return (
      <GameStyles.Container>
        <GameStyles.Title>Rock Paper Scissors</GameStyles.Title>
        <GameStyles.ChoicesContainer>
          <GameStyles.ChoiceIcon
            onClick={() => this.handleIconClick('rock')}
            selected={userChoice === 'rock'}
            disabled={playClicked}
          >
            <GameStyles.HandRockIcon size={48} />
          </GameStyles.ChoiceIcon>
          <GameStyles.ChoiceIcon
            onClick={() => this.handleIconClick('paper')}
            selected={userChoice === 'paper'}
            disabled={playClicked}
          >
            <GameStyles.HandPaperIcon size={48} />
          </GameStyles.ChoiceIcon>
          <GameStyles.ChoiceIcon
            onClick={() => this.handleIconClick('scissors')}
            selected={userChoice === 'scissors'}
            disabled={playClicked}
          >
            <GameStyles.HandScissorsIcon size={48} />
          </GameStyles.ChoiceIcon>
          <GameStyles.ChoiceIcon
            onClick={this.handleDiceClick}
            selected={userChoice === 'dice'}
            disabled={playClicked}
          >
            <GameStyles.DiceIcon size={48} />
          </GameStyles.ChoiceIcon>
        </GameStyles.ChoicesContainer>
        <GameStyles.Button onClick={this.handlePlayClick}>
          {playClicked ? 'Play Again' : 'Play'}
        </GameStyles.Button>
        {playClicked && (
          <GameStyles.Result>
            {result && computersChoice && (
              <>
                {/* <p>
                  your choice {' '}
                  {userChoice === 'dice' ? (
                    <GameStyles.DiceIcon size={48} />
                  ) : (
                    <>
                      {userChoice === 'rock' && <GameStyles.HandRockIcon size={24} />}
                      {userChoice === 'paper' && <GameStyles.HandPaperIcon size={24} />}
                      {userChoice === 'scissors' && <GameStyles.HandScissorsIcon size={24} />}
                    </>
                  )}
                </p> */}
                <p>
                  {' '}
                  {computersChoice === 'dice' ? (
                    <GameStyles.DiceIcon size={48} />
                  ) : (
                    <>
                      {computersChoice === 'rock' && <GameStyles.HandRockIcon size={24} color='#0099FF'/>}
                      {computersChoice === 'paper' && <GameStyles.HandPaperIcon size={24} color='#0099FF'/>}
                      {computersChoice === 'scissors' && (
                        <GameStyles.HandScissorsIcon size={24} color='#0099FF'/>
                      )}
                    </>
                  )}
                </p>
                <p>{result}</p>
              </>
            )}
          </GameStyles.Result>
        )}
      </GameStyles.Container>
    );
  }
}

export default App;
