# Part 1

<span style="color: red;">Purpose:</span> To create an interactive multiple-choice quiz for the Federal Aviation Administration. This quiz is administered to all prospective pilots who wish to have a license to fly a private plane.

1. A copy of the quiz, in HTML format, is available to you as a starting point. You will notice that the correct answer is indicated inside a comment for each question.
2. Create an internal script to correct the quiz. To do this, each radio button will need a <span style="color: red;">click event</span> to call a <span style="color: red;">function</span>(handler function) for that particular question, passing in the answer the pilot gave. Create individual functions in the internal script to perform this step.
3. The function should immediately display a message to the pilot, using a pop-up, indicating whether they answered correctly or not. You should have <span style="color: red;">5 functions</span> (each with an <span style="color: red;">if/else</span> structure).
4. Test your script thoroughly to make sure each question gets marked correctly.

<mark>Get this step checked off before continuing.</mark>

# Part 2

1. Optimize your script by changing your 5 functions into <span style="color: red;">1 function</span> which will accepts two parameters, the question number and the answer provided by the pilot.
2. Use <span style="color: red;">switch/case</span> structure. Your case structure should determine which question was selected, and then inside each case there should be an <span style="color: red;">if/else</span> structure to inform the pilot whether they got the question right or wrong.

<mark>Test your script thoroughly before getting this step checked off./<mark>

# Part 3

1. Optimize your script one more time by using an <span style="color: red;">array</span> to hold the answers that the pilot gives. This array should be filled by the click event of the radio button.
2. Create a second array to contain the correct answers. This time do not offer an immediate response to the pilot as to whether they selected the correct answer or not.
3. Add a button, labeled “Score”, to the bottom of your page. When the button is clicked display the pilot’s score in a pop-up.
4. Do not tell the pilot which questions were answered correctly just how many were answered correctly (for example, “You got 4 out of 5 questions correctly.”).
5. Use a loop to compare the two arrays to determine if the pilot was correct or not.

<mark>Test your script thoroughly before getting it checked off for the last time.</mark>
