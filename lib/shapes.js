//here we will be making classes for the shapes 
class Shape{
    constructor(){
        this.color = " ";
    }
    //shape class takes in setColor functjion
    setColor(colorVar){
        this.color = colorVar;
    }
}
//triangle class
class Triangle extends Shape{
    render(){
        //return poygon with color input 
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
//square class 
class Square extends Shape{
    render(){
        //return poygon with color input 
        return  `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}
//circle class 
class Circle extends Shape{
    render(){
        //return poygon with color input 
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}
//exports classses 
module.exports = {Triangle, Square , Circle};