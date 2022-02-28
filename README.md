# mazeGenerator
Maze Generator made using JavaScript and the P5.js library.

The [Maze Generator](https://editor.p5js.org/braydenkm/sketches/ixfZBjJVA) can be found at the P5.js editor.


## How it Works
Starting at the specified starting cell, the generator checks if the cell's neighbours have been visited. A random unvisited neighbour
is selected and a connection is made between the two. When this connection is made, the starting cell is pushed onto the cell stack and
the neighbour cell becomes the current cell.

In the event that the current cell has no unvisited neighbours, the generator will backtrack by popping the top cell from the stack and
using it as the current cell. This makes sure that every cell will be visited by the end of the program execution.
