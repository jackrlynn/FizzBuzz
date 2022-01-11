# FizzBuzz Web App
## Overview
The FizzBuzz app is an interactive web environment in which users can play and utilize the functionality of the classic
game FizzBuzz. <b>Generator</b> is an interactive webpage in which users can enter parameters for start, stop, Fizz, and
Buzz numbers and get output a comma-separated list of the range's respective FizzBuzz values. <b>Game</b> is another webpage
in which users can play the FizzBuzz game with standard parameters--3 being Fizz and 5 being Buzz. Both webpages are 
connected by a homepage.
## How to Use
### Method 1: Integrated Web App
1. Run the main function in the following file, either using `Javac` or and IDE.<br>
```
src/main/java/net/codejava/implementation/ImplementationApplication.java
```
2. Open a web browser (Chrome-recommended) and go to the localhost.
```
htp://localhost:8080/
```
3. Enjoy the website as normal! The individual pages should be intuitive to use.
### Method 2: JavaScript-Enabled Webpages
1. Open any of the HTML files in a web browser (Chrome-recommended).
2. Enjoy the webpages as normal. Note the navigation between pages won't work, as `GET` requests are handled by SpringBoot
and won't work without the app running.
## Architecture
The web app itself is a Java SpringBoot system with a loose MVC structure. The current system is composed of two parts: (1) 
<b>views</b>, which are handled by JavaScript-enabled HTML pages; and (2) <b>controllers</b>, which control navigation
between pages using typical SpringBoot RESTful design.
### Views
The views are controlled by JavaScript-enabled HTML pages. The HTML pages themselves are the front-end of the websites and
created using Bootstrap CSS. The HTML pages are modified using JavaScript functions that can do anything from validate the input,
generate the FizzBuzz number list, and perpetuate the game. The choice of JavaScript-enabled HTML is simple: the functionality
of the program is simple and does not required saved data. Therefore, loading a new page for each iteration of FizzBuzz,
especially in the case of the game, would be cumbersome and unnecessary.
### Controllers
The main purpose of the controllers in this project are simply for the navigation between pages using `GET` requests. None
of the hidden mechanisms of the FizzBuzz game or generator are controlled using controllers for two reasons: (1) it is simpler
to have the webpage control these systems with JavaScript as the functions are relatively simple; and (2) there is no 
interaction with databases nor control of models in this iteration.
### Models
While the system does mostly follow MVC structure, no models are currently used as there is no need for saved data given
the prompt.
# Design
## References
<b>Template Bootstrap HTML:</b> Bare (Sep 20, 2013) - Start Bootstrap