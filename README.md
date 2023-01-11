# TeamProfileGenerator


## Description

Following program is focused on what I have learned of unit testing and OOP from node.js during UW coding bootcamp.
This program creates results of team card in HTML file after user has inputting prompt that ask when running the program. 
With each card of (Manager, Engineer, and Intern), has their own info that embeded to the card that can be clicked depending on thier info.

## Table of Contents

[ User Story ](#userStory)

[ Criteria ](#criteria)

[ Usage ](#usage)

[ Video ](#Video)



<a name="userStory"/>

## User Story
`AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles`


<a name="criteria"/>

## Criteria

`GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated`

<a name="usage"/>

## Usage

To use the program:
For testing, open terminal, and type `jest` and enter.

For running the program of team generator, open terminal and type `node index`. Follow prompt and when done, choose `Done`
option.
New file of html will be created under dist folder. Simply opening that html file will show the web generated of teamgeneration.

<a name="video"/>

## Video 



