export default class Rect {
    constructor(p5,position = [0,0],size = [50,50],color=[9,7,140],border = 1){
      this.position= p5.createVector(...position)
      this.top = this.position.y
      this.left = this.position.x;
      [this.width, this.height] = size
      this.bottom = this.top + this.height;
      this.right = this.left + this.width;
      this.strokeWeight = border
      this.color = color

    }
  
    colliderect(rect) {
      if (this.right > rect.left && this.left < rect.right && this.bottom > rect.top && this.top < rect.bottom) 
        {
        return true;
      }
      return false;
    }

    get_center(p5){
      return p5.createVector(...[this.left+ (this.width/2),this.top+ (this.height/2)])
    }

    collidemouse(p5){
      return this.right > p5.mouseX -6 && this.left < p5.mouseX +6  && this.bottom > p5.mouseY - 9 && this.top < p5.mouseY + 9
    }

    update(new_position= null){
      if (new_position){
        this.position.set(...new_position)
      }
      this.top = this.position.y
      this.left = this.position.x;
      this.bottom = this.top + this.height;
      this.right = this.left + this.width;
    }

  
    draw(p5) {
      p5.fill(this.color);
      p5.strokeWeight(this.strokeWeight);
      

      p5.rect(this.position.x,this.position.y,this.width,this.height); 
    }
  }

