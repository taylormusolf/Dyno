class Level{
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
      x: 385,
      y: 200,
      width: 100,
      height: 20
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
    // this.walls.push(
    //   {
    //   x: 1400,
    //   y: 221,
    //   width: 100,
    //   height: 729
    //   }
    // )
    this.walls.push(
      {
      x: 250,
      y: 221,
      width: 25,
      height: 729
      }
    )
    this.walls.push(
      {
      x: 50,
      y: 221,
      width: 25,
      height: 729
      }
    )  
    this.walls.push(
      {
      x: 400,
      y: 221,
      width: 25,
      height: 729
      }
    ) 
  }

}


module.exports = Level;