# JN-Social-Network-Api


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Links](#links)


## Description

Through this challenge, I was able to build an API for a social network application where users can share their thoughts, react to friends' thoughts, and create a friends list. It was created with Express.js, a MongoDB database, Mongoose ODM, and DayJS to format timestamps. The application was created using the following acceptance criterias listed below:


```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

The project was built completely from scratch, meaning there was no starter code provided for the challenge! Insomnia was used in order to seed data and test the routes. A [walkthrough video](#links) was created to demonstrate how the application works.


## Installation

In order to navigate through this Social Network API application, you will need the following:

- Visual Studio Code <br>
- Node.js <br>
- Insomnia <br>
- And you will need to install the dependencies in the package.json file!


## Usage

Once you have the file in VS Code, you will need to install the dependencies by running ```npm install``` in the integrated terminal.

Once the dependencies are installed, type ```node index.js``` in the integrated terminal to start the server. You will know that the server is running when you see the message ```API server running on port 3001!```.

In Insomnia, you can test the different ```User```, ```Thought```, ```Friend```, and ```Reaction``` routes by passing in the different endpoints. The routes should return the corresponding data, given that the user has passed in the correct routes!


## Credits

Thank you, Chris B., and Michael H., for all your help! 😊👍


## Links
[GitHub Repository](https://github.com/jkimys2/JN-Social-Network-Api) <br>
[Walkthrough Video](https://drive.google.com/file/d/1W9oaNQv0ZnDMduxLcXAR21in2bJezMMY/view?usp=sharing)