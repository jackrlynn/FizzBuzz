# FizzBuzz Web App
<b>GitHub:</b> [jackrlynn/FizzBuzz](https://github.com/jackrlynn/FizzBuzz)
## Overview
The FizzBuzz app is an interactive webpage in which users can play and utilize the functionality of the classic schoolhouse
game FizzBuzz. FizzBuzz is played by counting from 1 to infinity, in which numbers divisible by 3 are replaced with Fizz,
numbers divisible by 5 are replaced with Buzz, and numbers divisible by both 3 and 5 are replaced with FizzBuzz. Players are
out of the game if they incorrectly say the next digit in the sequence. Users are able to interact with the game with two webpages:
1. <b>Generator</b>: Users enter parameters for start, stop, Fizz, and Buzz numbers and get output a comma-separated
list of the range's FizzBuzz values.
2. <b>Game</b>: Users play the FizzBuzz game with standard parameters.
## How to Use
### Method 1 (RECOMMENDED): Integrated Web App
1. Run the main function in the following file, either using `Javac` or an IDE.
```
src/main/java/net/codejava/implementation/ImplementationApplication.java
```
2. Open a web browser (Chrome is recommended) and go to the localhost.
```
http://localhost:8080/
```
3. Enjoy the website as normal! The individual pages should be intuitive to use.
### Method 2: JavaScript-Enabled Webpages
1. Open any of the HTML files in a web browser (Chrome is recommended). They are located here:
```
src/main/resources/static
```
2. Enjoy the webpages as normal. Note that navigation between pages won't work, as `GET` requests are handled by SpringBoot
and won't work without the app running.
## Architecture
The web app itself is a Java SpringBoot system with a loose MVC structure. The current system is composed of two parts: (1) 
<b>views</b>, which are handled by JavaScript-enabled HTML pages; and (2) <b>controllers</b>, which control navigation
between pages using typical SpringBoot RESTful design.
### Views
The views are controlled by JavaScript-enabled HTML pages. The HTML pages themselves are the front-end of the websites and
are created using Bootstrap CSS. The HTML pages are modified using JavaScript functions that can do anything from validate the input,
generate the FizzBuzz number list, and perpetuate the game. The choice of JavaScript-enabled HTML is simple: the functionality
of the program is simple and does not required saved data. Therefore, loading a new page for each iteration of FizzBuzz
(which would be required for Java), would be cumbersome and unnecessary.
### Controllers
The main purpose of the controllers here is simply for the navigation between pages using `GET` requests. None
of the mechanisms of the FizzBuzz game or generator are controlled using controllers for two reasons: (1) it is simpler
to have the webpage control these systems with JavaScript; and (2) there is no interaction with databases nor control of
models. Future iterations could potentially use the controllers more, especially if models are introduced.
### Models
While the system does mostly follow MVC structure, no models are currently used as there is no need for saved data given
the prompt.
## Design
FizzBuzz's design is broken up into two parts: a game and a generator.
### Generator
The generator is a proof-of-concept that the FizzBuzz game works. The user can enter unique integer values for start, stop, Fizz, and Buzz digits and will get returned a comma-seperated list of their
respective FizzBuzz values. Within the function is a checking mechanism that makes sure the input is valid, such as the
stop digit being larger than the start and Fizz and Buzz digits being greater than or equal to 1. These FizzBuzz values
are generated from a function that harnesses modulo (`%`) to see if the remainder of the current integer by the Fizz or Buzz
number equals 0 (i.e., is divisible by the Fizz and Buzz numbers).
### Game
FizzBuzz first and foremost is a game, so it is best-served being presented to the user as such. The core design of the 
game structure is that there are four buttons--Fizz, Buzz, FizzBuzz, and the current number--that the user must of choose
from as the next digit in the sequence. When pressed, the game validates the user's choice using the same FizzBuzz function
used in the generator. If the user and check function match, then the user moves on to the next round with updated buttons;
if not, the game is over and the user is prompted to select again. A score is also included to make the page feel more game-like.
## References
<b>Template Bootstrap HTML and CSS:</b> [Bare (Sep 20, 2013) - Start Bootstrap](https://startbootstrap.com/template/bare)