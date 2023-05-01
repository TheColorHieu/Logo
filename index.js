//importing our node packages 
const inquirer = require("inquirer");
const fs = require("fs");

//we will be importing class that has our shape codes 
const {Triangle, Square, Circle} = require("./lib/shapes");

//we are creating a function to create a file using the users input 
function writeToFile(fileName , answers){
//file starts aas an empty string
let svgString = " ";
//setting the dimensions of the logo container
svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
//the g tag wraps the tag so that the font input layers on top of polygon
svgString += "<g>";
//checking for users answers 
svgString += `${answers.shape}`;

//here we are setting up the properties of the shapes and color 
let shapeChoice;
if (answers.shape === "Triangle"){
    
}
}
