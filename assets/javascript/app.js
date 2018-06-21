// 1. user takes quiz

    // a. set up timer that starts at start button click

        // insert start button that starts timer and removes class .d-none from question div
        // insert 60 second timer in row with header
        // add/remove classes to some objects to progress DOM appearance

    // b. create submit button that ends game before timer and moves to next step

        // on submit gather values to determine results displayed
        // display results in place of the quiz leaving only them and a reset button

    // c. or timer moves on if user hasnt submitted

        // if timer runs out don't return any results, give sarcastic message instead

// 2. answers have specific value that assigns outcome

    // a. store value from the answers in individual vars

        // set up second set of values for sub skills

    // b. create var of total value of each individual var

// 3. results display likelyhood of survival in the wastes and potential "top skill"

    // a. display how likely the user is to succeed out of the vault

        // 1-4 maybe dont leave
        // 5-8 trader with close locations
        // 9-12 easily make a life in the wastes
        // 13-16 strike fear into the raiders of the wastes

    // b. notifies the user of any particular skills

// on ready function, starts js 
$("document").ready(function() {
    
    // LINES 40 - 68 CONTAIN TIMER
    // how long the timer runs
    var number = 60;
    //  variable holds the interval ID when we execute the "run" function
    var intervalId;

    // determines how quickly the timer decreases, in this case 1 second
    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function stop() {
        clearInterval(intervalId);
    }

    function decrement() {
        number--;
        //  Show the count in the header
        $(".timer").html("Time Remaining: " + number);
        //  if the timer runs up
        if (number === 0) {
            //  run the stop function.
            stop();
            // reveals div containing slightly offensive vault tec message
            $(".resultbox").removeClass("d-none");
            //  Alert the user that time is up.
            $(".results").html("<p>If the G.O.A.T. is this difficult, Valut-Tec aggresively recommends you remain in the Vault. Inquire with your Overseer about the availabilty of helmets, personal floatation devices, and mouth guards.</p>");
        }
    } // END TIMER

    // start button function that reveals quiz and starts timer
    $("#start").click(function() {
        // DOM manipulation stuff
        $("div").removeClass("invisible");
        $("#start").addClass("d-none");
        $(".intro").addClass("d-none");
        // starts timer
        run();

    });


    // stops timer and submits user results for evaluation
    $("#submit").click(function() {
        //stops timer
        stop();
        // reveals div with results   
        $(".resultbox").removeClass("d-none");
        // grabs input from questions
        var ques1 = parseInt(document.querySelector('input[name = "Q1Radios"]:checked').value);
        var ques2 = parseInt(document.querySelector('input[name = "Q2Radios"]:checked').value);
        var ques3 = parseInt(document.querySelector('input[name = "Q3Radios"]:checked').value);
        var ques4 = parseInt(document.querySelector('input[name = "Q4Radios"]:checked').value);
        
        // so you can see the results in the console
        console.log(ques1);
        console.log(ques2);
        console.log(ques3);
        console.log(ques4);
        
        var result = ques1 + ques2 + ques3 + ques4;

        // shows the total in the console
        console.log(result);

        // gives message based on overall score
        if (result < 4) 
            $(".results").html("Your survival skills are...lacking. Your outer-vault trips will now be escorted. While being stuck inside the vault without a babysitter may seem boring, don't worry! There are still plenty of positions in Vault 101 vacant!");
    
        else if (result <= 11)
            $(".results").html("Your survival skills are average. With proper training and care you will be ready to take on what lies outside the vault door. Feel free to browse the many openings both in and out of the vault. However expect more training for more difficult positions!");

        else
            $(".results").html("You seem to be destined to be a master of the wastes. Your ruthless demeanor and well equipped set of survival skills the Overseer may have special tasks for you. Expect to find a career in expedition, exploration, or caravaning.");

        
        // defines some skills for fun
        if ((ques2 === 2) && (ques4 === 3 || 4)) {
            $(".skills").html("It seems you may be in for some extra training with guns!")
        }
        else if (ques1 === 4 && ques3 === 3) {
            $(".skills").html("Did you want to be a scientist when you grew up? I hope so!")
        }
        else if (ques1 === 2 && ques4 === 1) {
            $(".skills").html("You are a true wordsmith. Have you considered politics?")
        }
        else if (ques1 === 1 && ques4 === 1) {
            $(".skills").html("I didn't even hear you come it! You would've been great in pre-war corporate espionage!")
        }
        else if (ques2 === 4 && ques3 === 2) {
            $(".skills").html()
        }
        else {
            $(".skills").html("Keep honing those skills!")
        }

    });


});
