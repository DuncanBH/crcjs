let arrayName = ["Russell Westbrook", "James Harden","LeBron James"];
let arrayGames = [67,81,69];
let arrayFields = [627,647,624];
let arrayFrees = [375,715,546];

for (let i = 0; i < arrayName.length; i++)
{
    document.write("<tr>");
        document.write("<td>");
        document.write(arrayName[i]);
        document.write("</td>");

        document.write("<td>");
        document.write(arrayGames[i]);
        document.write("</td>");

        document.write("<td>");
        document.write(arrayFields[i]);
        document.write("</td>");

        document.write("<td>");
        document.write(arrayFrees[i]);
        document.write("</td>");

        //total points 
        let total = arrayFields[i] * 2 + arrayFrees[i];

        document.write("<td>");
        document.write(total);
        document.write("</td>");

        document.write("<td>");
        document.write(total/arrayGames[i]);
        document.write("</td>");
    document.write("</tr>");   
}