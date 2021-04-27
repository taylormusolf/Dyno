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
            x: 100 * i,
            y: 200 + (30 * i),
            width: 110,
            height: 20
            }
        );
    }
  }

}


module.exports = Level;