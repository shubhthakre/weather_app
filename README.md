# How To Build a Weather App with React
## Prerequisites

* You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine.
* You’ll need to have some familiarity with how to open and use a command-line tool.
* Internet connection.
* You’ll need a code editor (I recommend VS Code).
* A browser other than IE. It does not support the way we are going to call the API (fetch).
* OpenWeatherApi Account.


## Getting Started
    1. Open a new terminal window and navigate to a comfortable directory.
    2. Run  [npx create-react-app weater-app] (https://reactjs.org/docs/create-a-new-react-app.html) in the new terminal. The download process will take a few minutes.
    *  npx is a program that we are giving a command to.
    *  create-react-app is the command that makes a new React project
    *  weather_app is an argument we are passing to name the project root directory
   3.Once the download process is done, jump into the project by executing cd weather_app. There are a lot of files but don’t worry, I will keep things simple for this tutorial and will focus on the necessary items.
   4.Open your text editor. I am using Visual Studio Code, so I can use the command-line-interface provided by the editor. In the root project directory, I can enter code .
   5.Back in the terminal at the root of the project run npm start. This starts the development server on our local machine so the project will compile every time we make a change and save. When the project tries to compile in development mode it informs us of any mistakes that we have made in editing. This is very helpful when starting out.
After a few moments, a new browser tab will open to the URL http://localhost:3000 and you should see the project.
     
     
  snap:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

We now have a React application running on our machine. Before we choose a weather API we are going to clean up a few items.

6.Open /public/index.html. This is the page that will be given to browsers when our domain is requested. Notice that there is only one HTML file in the whole project. This is why many ReactJS applications are called single-page-apps, or SPAs.
7.We will only make one change in this file: locate the title tag and change the text inside to Weather App, or anything you would like the title of the page to be. You should see the change reflected in the tab of your browser after you save.

##Choosing a Weather API

Our React weather app needs weather data, so we are going to take a look at openweather api

