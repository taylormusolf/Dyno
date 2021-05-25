class Level{
  constructor(){
    this.complete = false;
    this.platforms = [];
    this.walls = [];
    this.unclimbableWalls = [];
    this.ceilings = [];
    this.createPlatforms();
    this.createWalls();
    this.createUnclimbableWalls();
    this.createCeilings();
  }
  
  createPlatforms(){
     //start platform
     this.platforms.push(
      {
      x: -5,
      y: 550,
      width: 326,
      height: 60
      }
    )
    //exit platform
    this.platforms.push(
      {
        x: 625,
        y: 550,
        width: 1200,
        height: 50
      }
    )
    //mid platform
    this.platforms.push(
      {
      x: 383,
      y: 379,
      width: 193,
      height: 21
      }
    )   
      //entrance overhang platform
    this.platforms.push(
      {
      x: 60,
      y: 105,
      width: 345,
      height: 20
      }
    )
    
    
    
  }

  createWalls(){
    //entrance wall
    this.walls.push(
      {
      x: 10,
      y: 50,
      width: 25,
      height: 400
      }
    )
    //entrance overhang
    this.walls.push(
      {
      x: 75,
      y: 125,
      width: 350,
      height: 200
      }
    )
    
    //center wall
    this.walls.push(
      {
      x: 400,
      y: 400,
      width: 200,
      height: 200
      }
    )
    //right wall overhang
    this.walls.push(
      {
      x: 650,
      y: 50,
      width: 150,
      height: 400
      }
    )
    
    
  }


  createUnclimbableWalls(){
    //left wall or entrance wall
    
    this.unclimbableWalls.push(
      {
      x: -5,
      y: 50,
      width: 25,
      height: 600
      }
    )
     
  }
  createCeilings(){
    // main ceiling
    this.ceilings.push(
      {
        x: 0,
        y: 0,
        width: 1500,
        height: 50
      }
    )
    this.ceilings.push(
      {
      x: 650,
      y: 450,
      width: 150,
      height: 10
      }
    )
    this.ceilings.push(
      {
      x: 75,
      y: 325,
      width: 350,
      height: 10
      }
    )
  }

}




module.exports = Level;