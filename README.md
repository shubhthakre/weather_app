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
    2. Run  [npx create-react-app weater-app]  in the new terminal. The download process will take a few minutes.
       *  npx is a program that we are giving a command to.
       *  create-react-app is the command that makes a new React project
        *  weather_app is an argument we are passing to name the project root directory
   3.Once the download process is done, jump into the project by executing cd weather_app. There are a lot of files but don’t worry, I will keep things simple for this tutorial and will focus on the necessary items.
   4.Open your text editor. I am using Visual Studio Code, so I can use the command-line-interface provided by the editor. In the root project directory, I can enter code .
   5.Back in the terminal at the root of the project run npm start. This starts the development server on our local machine so the project will compile every time we make a change and save. When the project tries to compile in development mode it informs us of any mistakes that we have made in editing. This is very helpful when starting out.
After a few moments, a new browser tab will open to the URL http://localhost:3000 and you should see the project.
     
     
  snap:

![](https://i.ytimg.com/vi/ctLFWAanxcI/maxresdefault.jpg)

We now have a React application running on our machine. Before we choose a weather API we are going to clean up a few items.

6.Open /public/index.html. This is the page that will be given to browsers when our domain is requested. Notice that there is only one HTML file in the whole project. This is why many ReactJS applications are called single-page-apps, or SPAs.
7.We will only make one change in this file: locate the title tag and change the text inside to Weather App, or anything you would like the title of the page to be. You should see the change reflected in the tab of your browser after you save.

##Choosing a Weather API

Our React weather app needs weather data, so we are going to take a look at openweather api : https://openweathermap.org/api


![](https://simple-circuit.com/wp-content/uploads/2018/08/openweathermap-api-key.png)

1.Click it. The Open Weather Map API information page (the page you should already be on) gives us more detailed information.On the far left side, we have a list of API endpoints, each giving us different data, and displaying what kind of HTTP request it uses.The middle section gives us more detailed information describing the selected endpoint and the parameters. Parameters are predefined labels for data that we are going to give to the API (i.e city=Seattle).On the right, my personal favorite of the three sections is an interactive help center that shows us code snippets from a variety of different languages, libraries, and sample responses from the endpoints. This will save us a lot of time.Notice the responses we want are in JSON, Javascript Object Notation, which is a logical way to display information using objects and key-value pairs.TIP: the section on the right will respond to changes we make in the middle section. If we change parameters in the middle, the URL on the right should change.
2.In the code dropdown at the top of the right section select Javascript (fetch).

![](https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=bf60f4bf1bb530da7a5290db1d82675f)

Notice at the end of the URL string we see “q=London%252Cuk”. That is a URI encoded string for the ‘q’ parameter. Essentially, URI encoded strings are the URL compatible versions of the same string, but they account for special characters (i.e spaces and commas). Remember that for later.

3.In the middle section, underneath where it says GET Current Weather Data, in the Required Parameters section, change the ‘q’ parameter from ‘Nagpur’ to ‘Seattle’.


![](https://openweathermap.org/api)


