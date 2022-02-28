let custom = 0, small  = 1, medium = 2, large  = 3

// Maze Settings
// Presets
let mazeSize = small // small, medium, large, custom

// Point map begins generation from.
let startX = 0     // 0 <= startX <= mazeX
let startY = 0     // 0 <= startY <= mazeY

// These settings only work for custom.
// Dimensions of the board.
let mazeX = 50
let mazeY = 50
// Size of each cell.
let mazeScale = 15  // min: 3

// End of Settings.


// Set maze dimensions based off preset size settings.
function mazeDim() {
  switch (mazeSize) {
    case custom:
      console.log("Custom size")
      return
    case small:
      console.log("Small size")
      mazeX = 25
      mazeY = 25
      mazeScale = 30
      return
    case medium:
      console.log("Medium size")
      mazeX = 60
      mazeY = 60
      mazeScale = 13
      return
    case large:
      console.log("Large size")
      mazeX = 125
      mazeY = 100
      mazeScale = 7
      return
    default:
      console.log("No size specified")
      return
  }
}


// Initialize the maze map.
function setup() {
  mazeDim()
  createCanvas(mazeX * mazeScale, mazeY * mazeScale)
  background(50, 50, 200)
  noStroke()

  // Initialize points.
  for (let x = 0; x < mazeX; x++)
    for (let y = 0; y < mazeY; y++)
      points.push(new Point(x, y))

  // Create head.
  head = pointAt(startX, startY)
  head.start = true
  pointAt(head.x, head.y).visit()
  stack.push(head)
}

  
// Begin creating the maze.
function draw() {
  createMaze()
}