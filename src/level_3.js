class Level3{
  constructor(){
    this.complete = false;
    this.platforms = [];
    this.walls = [];
    this.unclimbableWalls = [];
    this.ceilings = [];
    this.createObjects();
  }
  
  createObjects(){
     //start platform
    this.platforms.push(
      {
        x: -5,
        y: 150,
        width: 100,
        height: 21
      }
    )
      //start bottom plat
    this.platforms.push(
      {
      x: 97,
      y: 550,
      width: 200,
      height: 60
      }
    )
      //entrance wall
    this.walls.push(
      {
      x: -5,
      y: 171,
      width: 125,
      height: 450
      }
    )
    //pogo wall 1
    this.walls.push(
      {
      x: 175,
      y: 300,
      width: 25,
      height: 250
      }
    )
    this.platforms.push(
      {
        x: 158,
        y: 280,
        width: 17,
        height: 21
      }
    )

    //pogo wall 2
    this.walls.push(
      {
      x: 300,
      y: 200,
      width: 25,
      height: 200
      }
    )
    this.platforms.push(
      {
        x: 283,
        y: 180,
        width: 17,
        height: 21
      }
    )
    //pogo wall 3
    this.walls.push(
      {
      x: 400,
      y: 300,
      width: 25,
      height: 300
      }
    )
    this.platforms.push(
      {
        x: 383,
        y: 280,
        width: 17,
        height: 21
      }
    )
    //exit platform

    //mid platform
 
    //left wall or entrance wall
    this.unclimbableWalls.push(
      {
      x: -5,
      y: 50,
      width: 25,
      height: 600
      }
    )
    // main ceiling
    this.ceilings.push(
      {
        x: 0,
        y: 0,
        width: 1500,
        height: 50
      }
    )
      //floating plat 1
    this.platforms.push(
      {
      x: 475,
      y: 400,
      width: 125,
      height: 21
      }
    )
      //floating plat 2
    this.platforms.push(
      {
      x: 475,
      y: 250,
      width: 125,
      height: 21
      }
    )
    //exit plat
    this.platforms.push(
      {
      x: 650,
      y: 550,
      width: 200,
      height: 60
      }
    )
    
   
  }
    


}




module.exports = Level3;