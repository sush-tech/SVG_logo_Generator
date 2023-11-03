// Constructor Arithmetic is imported.
const {Triangle,Square,Circle}  = require('./shape.js')

// A testing suite for Arithmetic is created.
describe('Shape', () => {
  // Several tests are created to check that shapes does in fact return the triangle/square/circle with choose properties according to user inputs.
  
  describe('Triangle', () => {
    it('should be able to create a triangle shape in logo.svg', () => {
      const textColor = 'yellow';
      const text = 'welcome';
      const color = 'black';
      const triangle = new Triangle();
      triangle.setColor(color);
      triangle.setText(text);
      triangle.setTextColor(textColor);
      expect(triangle.render('black','yellow','welcome')).toEqual(`<svg version="1.1" width="300 px" height="200 px" xmlns="http://www.w3.org/2000/svg">`+ 
      `<polygon points="200,10 100,210 300,210" style="fill:${color};"/>`+
      `<text x="200" y="130" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>`+
      `</svg>`);
    });
  });
   
  describe('Square', () => {
    it('should be able to create a triangle shape in logo.svg', () => {
      const textColor = 'yellow';
      const text = 'welcome';
      const color = 'black';
      const square = new Square();
      square.setColor(color);
      square.setText(text);
      square.setTextColor(textColor);
      expect(square.render('black','yellow','welcome')).toEqual(`<svg version="1.1" width="300 px" height="200 px" xmlns="http://www.w3.org/2000/svg">`+
      `<rect width="150" height="150" style="fill:${color};" />`+
      `<text x="70" y="90" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>`+
      `</svg>`);
    });
  });
  
  describe('Circle', () => {
    it('should be able to create a triangle shape in logo.svg', () => {
      const textColor = 'yellow';
      const text = 'welcome';
      const color = 'black';
      const circle = new Circle();
      circle.setColor(color);
      circle.setText(text);
      circle.setTextColor(textColor);
      expect(circle.render('black','yellow','welcome')).toEqual(`<svg version="1.1" width="300 px" height="200 px" xmlns="http://www.w3.org/2000/svg">`+
      `<circle cx="50" cy="50" r="40" fill=${color} />`+
      `<text x="50" y="55" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>`+
      `</svg>`);
    });
  });
});

