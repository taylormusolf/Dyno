class Level{
  constructor(){
    // this.BG_COLOR = "#000000";
    // this.DIM_X = 270;
    // this.DIM_Y = 270;
    this.platforms = [];
    this.walls = [];
    this.unclimbableWalls = [];
    this.createPlatforms();
    this.createWalls();
    this.createUnclimbableWalls();
  }
  
  createPlatforms(){
    this.platforms.push(
      {
      x: 383,
      y: 880,
      width: 18,
      height: 20
      }
    )
    this.platforms.push(
      {
      x: 533,
      y: 880,
      width: 18,
      height: 20
      }
    )
    //pit plat
    this.platforms.push(
      {
      x: 625,
      y: 600,
      width: 110,
      height: 20
      }
    )
    //pit plat 2
    this.platforms.push(
      {
      x: 700,
      y: 700,
      width: 110,
      height: 20
      }
    )
    //pit plat 3
    this.platforms.push(
      {
      x: 825,
      y: 800,
      width: 110,
      height: 20
      }
    )
    //pit plat 4
    this.platforms.push(
      {
      x: 925,
      y: 900,
      width: 110,
      height: 20
      }
    )
    this.platforms.push(
      {
      x: 1183,
      y: 200,
      width: 144,
      height: 21
      }
    )
    this.platforms.push(
      {
      x: 1383,
      y: 200,
      width: 149,
      height: 21
      }
    )
    this.platforms.push(
      {
      x: 11,
      y: 580,
      width: 326,
      height: 21
      }
    )
    this.platforms.push(
      {
      x: 432,
      y: 280,
      width: 145,
      height: 21
      }
    )     
    //floor
    // this.platforms.push(
    //   {
    //     x: 0,
    //     y: 950,
    //     width: 1500,
    //     height: 50
    //   }
    // )
    this.platforms.push(
      {
        x: 0,
        y: 950,
        width: 750,
        height: 50
      }
    )
    this.platforms.push(
      {
        x: 1000,
        y: 950,
        width: 1200,
        height: 50
      }
    )
    
  }

  createWalls(){
    //ceiling
    this.walls.push(
      {
        x: 0,
        y: 0,
        width: 1500,
        height: 50
      }
    )
    //far right wall
    this.walls.push(
      {
      x: 1400,
      y: 221,
      width: 150,
      height: 729
      }
    )
    //second from right wall
    this.walls.push(
      {
      x: 1200,
      y: 221,
      width: 150,
      height: 600
      }
    )
    //center wall
    this.walls.push(
      {
      x: 450,
      y: 300,
      width: 150,
      height: 400
      }
    )
    //center wall overhang
    this.walls.push(
      {
      x: 650,
      y: 50,
      width: 150,
      height: 400
      }
    )
    //entrance overhang
    this.walls.push(
      {
      x: 10,
      y: 600,
      width: 350,
      height: 200
      }
    )
    //small pogo wall
    this.walls.push(
      {
      x: 400,
      y: 900,
      width: 25,
      height: 50
      }
    )
    // 2nd small pogo wall
    this.walls.push(
      {
      x: 550,
      y: 900,
      width: 25,
      height: 50
      }
    ) 
    
  }


  createUnclimbableWalls(){
    //left wall or entrance wall
    this.unclimbableWalls.push(
      {
      x: 10,
      y: 50,
      width: 25,
      height: 750
      }
    )
     
  }

}




module.exports = Level;