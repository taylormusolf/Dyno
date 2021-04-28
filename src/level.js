class Level{
  constructor(){
    // this.BG_COLOR = "#000000";
    // this.DIM_X = 270;
    // this.DIM_Y = 270;
    this.numPlatforms = 2;
    this.platforms = [];
    this.createplat();
  }
  


  // Function to create platforms
  createplat(){
    for(let i = 0; i < this.numPlatforms; i++) {
        this.platforms.push(
            {
            x: 1000 * i,
            y: 900 + (30 * i),
            width: 110,
            height: 20
            }
        );
    }
    this.platforms.push(
      {
        x: 0,
        y: 950,
        width: 1500,
        height: 50
      }
    )
    this.platforms.push(
      {
        x: 0,
        y: 0,
        width: 1500,
        height: 50
      }
    )
  }

}


module.exports = Level;