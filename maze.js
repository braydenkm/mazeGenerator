// Point class
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.vis = false
    this.start = false
    this.cons = []
  }

  visit() {
    this.vis = true
    visited++
  }

  connect(point) {
    this.cons.push(point)
  }
}

let points = []
let stack = []
let visited = 0
let head

// Return the point at x, y.
function pointAt(x, y) {
  for (let i = 0; i < points.length; i++)
    if (x == points[i].x && y == points[i].y)
      return points[i]
}

// Draw a randomly generated maze.
function createMaze() {
  // After all points have been visited, stop looping.
  if (visited == mazeX * mazeY) {
    console.log("Maze Complete!")
    noLoop()
    return
  }
    
  let nextPoint;
  let options = []

  // Find available adjacent points.
  if (head.y - 1 >= 0    && !pointAt(head.x, head.y - 1).vis) options.push('n');
  if (head.x + 1 < mazeX && !pointAt(head.x + 1, head.y).vis) options.push('e');
  if (head.x - 1 >= 0    && !pointAt(head.x - 1, head.y).vis) options.push('w');
  if (head.y + 1 < mazeY && !pointAt(head.x, head.y + 1).vis) options.push('s');

  // Choose random adjacent cell
  if (options.length > 0) {
    let dir = random(options)
    switch (dir) {
      case 'n': nextPoint = pointAt(head.x, head.y - 1); break
      case 'e': nextPoint = pointAt(head.x + 1, head.y); break
      case 'w': nextPoint = pointAt(head.x - 1, head.y); break
      case 's': nextPoint = pointAt(head.x, head.y + 1); break
    }
  }

  // Adjacent cell was available.
  if (nextPoint != undefined) {
    // Connect cells.
    head.connect(nextPoint)
    nextPoint.connect(head)

    // Visit the point and set to head.
    nextPoint.visit()
    head = nextPoint
    stack.push(head)
  }

  // Adjacent cell was unavailable.
  else if (!head.start)
      head = stack.pop()

  // Draw grid.
  background(50, 50, 200)
  fill(0)
  for (let i = 0; i < mazeX + 1; i++)
    rect(i * mazeScale, 0, 2, mazeY * mazeScale)
  for (let i = 0; i < mazeY + 1; i++)
    rect(0, i * mazeScale, mazeX * mazeScale, 2)

  // Draw cells.
  for (let i = 0; i < points.length; i++) {
    if (points[i].vis) {
      fill(255)
      rect((points[i].x * mazeScale) + 2, (points[i].y * mazeScale) + 2, mazeScale - 2, mazeScale - 2)

      // Draw connections.
      for (let k = 0; k < points[i].cons.length; k++) {
        // North
        if (points[i].cons[k].y > points[i].y)
          rect((points[i].x * mazeScale) + 2, ((points[i].y + 1) * mazeScale), mazeScale - 2, 2)
        // West
        if (points[i].cons[k].x < points[i].x)
          rect((points[i].x * mazeScale), (points[i].y * mazeScale) + 2, 2, mazeScale - 2)
      }
    }
  }
}
  
  
  
  
  
  
  
  