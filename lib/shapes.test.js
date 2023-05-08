//in this file we will be constructing tests to see if itll pass    
const { Triangle,Square, Circle} = require ("./shapes.js");

//here we are testing the triangle 
//he we are just naming the test 
describe('Triangle test', () => {
//this where we write about whats its testing 
    test("testing to see a triangle with a blue background", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points = "150, 18 244, 182 56, 182" fill ="blue" />');
    });
});

//here we are testing the square 
describe('Square test', () => {
    test("testing to see if the square has a purple background", () =>{
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="purple" />');
    });
});

//here  we are testing the purple
describe('Circle test', () => {
    test("test for a circle with a #ca00ca background", () => {
        const shape = new Circle();
        shape.setColor("#ca00ca");
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="#ca00ca" />');
    });
});