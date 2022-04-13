# Leader-board

App to add name and score to the leader-board.
Use Js to add functionality:
-Add records.
-Use localStorage to keep records.
-Modules to separate functions.
Use webpack to compile all the files.

- Background taken from Pinterest - Mortal Kombat game.

## Built With:

- HTML.
- CSS.
- JavaScript
- Webpack
- Check the code with Linters tests:
  _Webhint_
  _Stylelint_
  _Lighthouse_
  _esLint_

## API information

    The Leaderboard API service was created by Microvere.
    Base URL: https://us-central1-js-capstone-backend.cloudfunctions.net/api/
    To create a game, send a POST action to Base URL + /games, with the name of the game. Parameters example for POST action:
    
{
    "name": "my Game"
}

    Return value: unique identifier for the game

{
    "result": "Game with ID: eGQEQDjegs1D0sJkE8LU added."
}

    To submit a score, send a POST action to Base URL + /games/ + :id + /scores/. E.g: Base URL/games.eGQEQDjegs1D0sJkE8LU/scores/. Parameters example for POST action:

{ 
    "user": "John Doe",
    "score": 42
}

## Getting Started

To get a local copy up and running follow these simple example steps:

- It's necessary to install the LTS option of Node.js. [link](https://nodejs.org/en/).
- npm will be included in the previous installation.
- Go to the folder where you want to store the project, and clone the repository:
- SSH: git@github.com:zkr024/Leaderboard.git
- From the folder where all the files are located please Run npm install.
- And to launch the web server, please run npm start.

## Authors

👤 Oscar Bermudez

- GitHub: [@githubhandle](https://github.com/zkr024)
- Twitter: [@twitterhandle](https://twitter.com/zkr024)
- LinkedIn: [LinkedIn](www.linkedin.com/in/oscar-bermudez-07908222a)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
