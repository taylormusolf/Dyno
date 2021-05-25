class Level2{
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
        y: 150,
        width: 1200,
        height: 21
      }
    )
    //mid platform 1
    this.platforms.push(
      {
      x: 150,
      y: 200,
      width: 125,
      height: 21
      }
    ) 
    //mid platform 2
    this.platforms.push(
      {
      x: 272,
      y: 125,
      width: 125,
      height: 21
      }
    ) 
    //mid platform 3
    this.platforms.push(
      {
      x: 400,
      y: 200,
      width: 125,
      height: 21
      }
    )
    
    
    
  }

  createWalls(){
    //entrance wall
    this.walls.push(
      {
      x: 10,
      y: 50,
      width: 75,
      height: 400
      }
    )
    //exit wall
    this.walls.push(
      {
      x: 642,
      y: 171,
      width: 200,
      height: 450
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
    //entrance ceiling
    this.ceilings.push(
      {
      x: 10,
      y: 450,
      width: 75,
      height: 10
      }
    )
  }

}




module.exports = Level2;