class Shape{
    constructor(){
      this.color = null ;

    }

    setColor(color){

        this.color = color ;

    }
    setTextColor(textColor){

        this.textColor = textColor ;

    }
    setText(text){

        this.text = text ;

    }

}

//none of the child class needs a constructor
class Triangle extends Shape{

render(color,textColor,text){
    this.setColor(color);
    this.setTextColor(textColor);
    this.setText(text);
   return ` <svg version="1.1" width="300 px" height="200 px" xmlns="http://www.w3.org/2000/svg"> 
   <polygon points="200,10 100,210 300,210" style="fill:${this.color};"/>
   <text x="200" y="130" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   </svg>`;
}

}

class Circle extends Shape{
    render(color,textColor,text){
        this.color = color;
        this.textColor = textColor;
        this.text = text;
        return ` <svg version="1.1" width="300 px" height="200 px" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill=${this.color} />
        <text x="50" y="55" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
     }  
}
class Square extends Shape{
    render(color,textColor,text){
        this.color = color;
        this.textColor = textColor;
        this.text = text;
        return ` <svg version="1.1" width="300 px" height="200 px" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" style="fill:${this.color};" />
        <text x="70" y="90" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
     } 
     
}

module.exports = {Triangle,Circle,Square};