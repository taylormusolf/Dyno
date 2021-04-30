class Level2{
  constructor(){
    // this.BG_COLOR = "#000000";
    // this.DIM_X = 270;
    // this.DIM_Y = 270;
    this.platforms = [];
    this.walls = [];
    this.createPlatforms();
    this.createWalls();
  }
  
  createPlatforms(){
    // this.platforms.push(
    //   {
    //   x: 0,
    //   y: 900,
    //   width: 110,
    //   height: 20
    //   }
    // )
    // this.platforms.push(
    //   {
    //   x: 50,
    //   y: 850,
    //   width: 110,
    //   height: 20
    //   }
    // )
    // this.platforms.push(
    //   {
    //   x: 200,
    //   y: 750,
    //   width: 110,
    //   height: 20
    //   }
    // )
    this.platforms.push(
      {
      x: 1383,
      y: 200,
      width: 150,
      height: 21
      }
    )  
    //floor
    this.platforms.push(
      {
        x: 0,
        y: 950,
        width: 1500,
        height: 50
      }
    )
    //ceiling
    this.platforms.push(
      {
        x: 0,
        y: 0,
        width: 1500,
        height: 50
      }
    )
  }

  createWalls(){
    this.walls.push(
      {
      x: 1400,
      y: 221,
      width: 150,
      height: 729
      }
    )
    this.walls.push(
      {
      x: 1200,
      y: 221,
      width: 150,
      height: 650
      }
    )
    this.walls.push(
      {
      x: 50,
      y: 900,
      width: 25,
      height: 200
      }
    )
    this.walls.push(
      {
      x: 200,
      y: 900,
      width: 25,
      height: 200
      }
    )
    this.walls.push(
      {
      x: 400,
      y: 900,
      width: 25,
      height: 200
      }
    )
    this.walls.push(
      {
      x: 550,
      y: 900,
      width: 25,
      height: 200
      }
    )  
  }

}


module.exports = Level2;