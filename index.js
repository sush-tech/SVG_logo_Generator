const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle,Circle,Square}  = require('./lib/shape.js');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What color would you like for the Logo?',
      name: 'color',
    },
    {
      type: 'list',
      message: 'What shape would you like for the Logo?',
      name: 'shape',
      choices : ['square','circle','triangle'],
    },
    {
      type: 'input',
      message: 'Please provide the text you would like on the Logo',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What color of the text?',
      name: 'textColor',
    },
  ])
  .then((response) => {
    createLogo(response);
  })
.catch(err => {
      console.log(err)
});
//you cannot send a function as second parameter for fs.writefile which should be string
function createLogo(response){
    const svg = generateSVG(response);
    fs.writeFile('logo.svg', svg, ()=> console.log('Generated logo.svg'));
}

function generateSVG(response){
  let selected_Shape = response.shape;
  let shape_color = response.color;
  let color_text = response.textColor;
  let msg = response.text ;
  switch(selected_Shape){
      case "triangle" :  
            shape   = new Triangle();
            return(shape.render(shape_color,color_text,msg));
      case "circle" :  
          shape = new Circle();
           return(shape.render(shape_color,color_text,msg));
      case "square" :  
          shape = new Square();
          return(shape.render(shape_color,color_text,msg));
      default : console.log("I need a shape!");
    
  }
  
}

