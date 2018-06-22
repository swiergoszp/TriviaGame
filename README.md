# TriviaGame
basic quiz game with timer themed as Fallout 3 GOAT exam

All questions and answers and the property of Bethesda Softworks.

My JS pseudo-code to give you an idea of what my plan was:

1. user takes quiz

a. set up timer that starts at start button click

insert start button that starts timer and removes class .d-none from question div
insert 60 second timer in row with header
add/remove classes to some objects to progress DOM appearance

b. create submit button that ends game before timer and moves to next step

on submit gather values to determine results displayed
display results in place of the quiz leaving only them and a reset button

c. or timer moves on if user hasnt submitted

if timer runs out don't return any results, give sarcastic message instead

2. answers have specific value that assigns outcome

a. store value from the answers in individual vars

set up second set of values for sub skills

b. create var of total value of each individual var

3. results display likelyhood of survival in the wastes and potential "top skill"

a. display how likely the user is to succeed out of the vault

1-4 maybe dont leave
5-8 trader with close locations
9-12 easily make a life in the wastes
13-16 strike fear into the raiders of the wastes

b. notifies the user of any particular skills
