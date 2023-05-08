//importing our node packages 
const inquirer = require("inquirer");
const fs = require("fs");

//we will be importing class that has our shape codes 
const {Triangle, Square, Circle} = require("./lib/shapes");

//we are creating a function to create a file using the users input 
function writeToFile(fileName , answers){
//file starts aas an empty string
let svgString = "";
//setting the dimensions of the logo container
svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
//the g tag wraps the tag so that the font input layers on top of polygon
svgString += "<g>";
//checking for users answers 
svgString += `${answers.shape}`;

//here we are setting up the properties of the shapes and color 
let shapeChoice;
switch (answers.shape) {
  case "Triangle":
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    break;
  case "Square":
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    break;
  default:
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    break;
}
 // <text> tag gives rise to text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"
 svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>${answers.shapeBackgroundColor}`;
 // Closing </g> tag
 svgString += "</g>";
 // Closing </svg> tag
 svgString +=  "</svg>";


 //this function takes in promptUser function along the svg string to be written in this file while letting user know if we are succesful 
 fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
 });
}
//creating the function for asking the user questions 
function promptUser(){
    inquirer
    .prompt([
        //text prompt
        {
        type: "input",
        message: "What text would you like your logo to display? (Enter up to three characters)",
        name: "text",
        },
        //text color 
        {
            type: "input",
            message: "Choose text color (Enter color eyword OR a hexadecimal number)",
            name: "textColor",
        },
        //shape choice prompt 
        {
            type: "list",
            message: "What shape would you like the logo to render?",
            choices: [
                "Triangle",
                "Square",
                "Circle"
            ],
            name: "shape",
        },
        //shape color 
        {
         type: "input",
         message: "Choose shapes color (Enter color OR hexadecimal number)",
         name: "shapeBackgroundColor",
        },
    ])
    .then((answers) => {
        //catching the error for the text prompt if users is entering more than 3 characters 
        if(answers.text.length > 3) {
            console.log("Must enter a value of no more than 3 characters");
            promptUser();
        } else{
            //calling the write function to generate SVG file
            writeToFile("logo.svg",answers);
        }
    });
}

promptUser();
